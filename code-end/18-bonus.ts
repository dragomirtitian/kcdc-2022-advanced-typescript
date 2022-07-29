type U = { foo: number } | { bar: number }
type I = { foo: number } & { bar: number }

type FuncUnion<T> = T extends T ? (value: T) => void : never;
type RR = FuncUnion<U>


export type UnionToIntersection<T> = (T extends T ? (value: T) => void : never) extends (p: infer U) => void ? U: void

type R = UnionToIntersection<U>