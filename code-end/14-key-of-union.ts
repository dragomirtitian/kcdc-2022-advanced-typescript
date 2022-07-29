export type Person =
    | { name: string; field: string }
    | { name: string; specialty: string }

type KeyOfAll<T> = T extends T ? keyof T : never
type R = KeyOfAll<Person>