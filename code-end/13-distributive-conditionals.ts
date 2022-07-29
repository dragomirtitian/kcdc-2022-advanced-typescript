type MakeArray<T> = T extends T ? T[] :never

enum E {
    A, B, C
}
type R = MakeArray<string | E | boolean>

export {}