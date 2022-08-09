
type PromiseObject<T> = {}  & {
    [P in keyof T]: T[P] extends () => Promise<infer R> ? R: never
}


async function promiseAllObject<T extends Record<string, () => Promise<any>>>(p: T): Promise<PromiseObject<T>> {
    let entries = Object.entries(p)
        .map(async ([k, v]) => [k, await v()] as [string, any]);

    return Object.fromEntries(await Promise.all(entries)) as PromiseObject<T>;
}

async function main() {
    // P should be types as:
    // let p: {
    //     age: number;
    //     name: string;
    //     lastBane: string;
    // }
    let p = await promiseAllObject({
        age: () => Promise.resolve(0),
        name: () => Promise.resolve("John"),
        lastBane: () => Promise.resolve("Oliver"),
    })   
}