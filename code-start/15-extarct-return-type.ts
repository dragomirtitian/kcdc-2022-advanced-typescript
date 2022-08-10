type EnvGetters = {
    "SERVER": () => Promise<string>,
    "PORT": () => Promise<number>
}

export type ResolvedReturnType<T> = any;
type Env = {
    "SERVER": string,
    "PORT": number
}   