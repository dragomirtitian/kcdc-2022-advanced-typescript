type Path =  string & {
    __brand: "Path";
};

type Guid =  string & {
    __brand: "Guid";
};

function copy(source: Guid, destination: Path) { /*...*/ }

let src = "AAA";
let dest = "BBBB";

function isPath(p: string): p is Path {
    return true;
}
function assertPath(p: string): asserts p is Path {
    if(!isPath(p)) throw new Error("Not a path");
}

assertPath(dest);

if(isPath(src)) {
    copy(src, dest);
}