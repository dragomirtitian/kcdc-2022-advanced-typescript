export type Person =
    | { name: string; field: string }
    | { name: string; specialty: string }

type KeyOfAll<T> = keyof T
type R = KeyOfAll<Person>