export {}

type Book = {
    pages: bigint;
    fontSize: number;
    name: string;
    author: string
}

type ValueOf<T> = T[keyof T]

type R = ValueOf<Book>