
type AllResults<T> = any

type AllArgs<T> = any

function invokeAll<
    T extends Record<string, (...a: any[]) => any>
>(p: T, args: AllArgs<T>): AllResults<T> {
    let entries = Object.entries(p)
        .map(([k, v]) => [k, v(...args[k])] as [string, any]);

    return Object.fromEntries(entries) as AllResults<T>;
}

async function main() {
    // let p: {
    //     age: number;
    //     name: string;
    //     lastName: string;
    // }
    
    //  args: {
    //     age: [v: number];
    //     name: [n: string];
    //     lastName: [n: string];
    // }

    let p = invokeAll({
        age: (v: number) => v + 1,
        name: (n: string) => n.toUpperCase(),
        lastName: (n: string) => n.toLowerCase(),
    }, {
        age: [1],
        lastName: ["John"],
        name: ["Oliver"]
    })
}