export {}

type Book = {
    pages: number;
    fontSize?: number;
    name: string;
    author: string
}

type FilterKeys<T, V> = {
    [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]


type R = FilterKeys<Book, string>
type R2 = FilterKeys<Book, number>


type FilterKeys2<T, V> = keyof {
    [K in keyof T as T[K] extends V ? K : never]-?: any
}

type PickByType<T, V> = {
    [K in keyof T as T[K] extends V ? K : never]: T[K]
}

type R3 = PickByType<Book, number | undefined>
type R4 = PickByType<Book, string>