import { execSync } from "child_process";
import { mkdirSync, rmSync, copyFileSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SLIDES_DIR = join(__dirname, "slides");
const TEMP_BUILD_DIR = join(__dirname, ".dist");
const DOCS_DIR = join(__dirname, "..", "docs");
const IMAGES_DIR = join(SLIDES_DIR, "media");

const MERGED_SLIDE_PATH = join(TEMP_BUILD_DIR, "dist.md");
const RENDERED_SLIDE_PATH = join(TEMP_BUILD_DIR, "dist.html");
const PUBLISHED_SLIDE_PATH = join(DOCS_DIR, "index.html");

function main() {
    const mds = readdirSync(SLIDES_DIR)
        .filter((f) => f.endsWith(".md"))
        .sort();
    const content = mds.map(readSlide).join("\n---\n");

    clean(TEMP_BUILD_DIR);
    clean(DOCS_DIR);

    writeFileSync(MERGED_SLIDE_PATH, content);
    execSync(`${join('.', 'node_modules', '.bin', 'marp')} --html --theme themes/kubi.css --bespoke.progress true ${MERGED_SLIDE_PATH}`);
    copyFileSync(RENDERED_SLIDE_PATH, PUBLISHED_SLIDE_PATH);
    
    if (process.platform === "win32" ) {
        const destDir = join(DOCS_DIR, basename(IMAGES_DIR));
        mkdirSync(destDir);
        execSync(`xcopy ${IMAGES_DIR} ${destDir} /E/H`);
    } else {
        execSync(`cp -R ${IMAGES_DIR} ${DOCS_DIR}`);
    }
}

/**
 * @param {string} dir
 */
function clean(dir) {
    rmSync(dir, {
        force: true,
        recursive: true
    });
    mkdirSync(dir, {
        recursive: true
    });
}

/**
 * @param {string} slide
 */
function readSlide(slide) {
    const file = join(SLIDES_DIR, slide);
    const content = readFileSync(file, "utf-8");

    if (slide.startsWith("00-")) {
        return content;
    }

    return stripFrontmatter(content);
}

/**
 * @param {string} content
 */
function stripFrontmatter(content) {
    const lines = content.split(/\r?\n/);
    let count = 0;
    const end = lines.findIndex((line) => {
        if (line === "---") {
            return count === 1 ? true : (count++, false);
        }
    });

    return lines.slice(end + 1).join("\n");
}

main();

