type EnvGetters = {
    "SERVER": () => Promise<string>,
    "PORT": () => Promise<number>
}

export type ResolvedReturnType<T> = T extends (...args: any) => Promise<infer R> ? R : never;
type Env = {
    [P in keyof EnvGetters]:  ResolvedReturnType<EnvGetters[P]>;
}   