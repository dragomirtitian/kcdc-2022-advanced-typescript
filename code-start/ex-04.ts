export {}
interface Db {

}
type WithDb<T extends Record<string, (db: Db, ...a: any[]) => any>> = 
    any


export function withDb<
    T extends Record<string, (db: Db, ...a: any[]) => any>
>(p: T): WithDb<T> {
    let db = {}
    let entries = Object.entries(p)
        .map(([k, v]) => [
            k, (...a: any[]) => v(db, ...a)
        ] as [string, (...a: any[]) => any]);

    return Object.fromEntries(entries) as WithDb<T>;
}

type Person = {
    id: number
    name: string,
    age: number,
}

// Ideally typed as 
// let p: {
//     getPersonById: (id: number) => Person;
//     insertPerson: (p: Person) => number;
//     updatePerson: (id: number, p: Person) => void;
// }
let p = withDb({
    getPersonById: (db: Db, id: number): Person => ({ id: 0, name: "", age: 0}),
    insertPerson: (db: Db, p: Person) => { /* insert record in using db */ return 0; },
    updatePerson: (db: Db, id: number, p: Person) => { /* insert record in using db */ },
})