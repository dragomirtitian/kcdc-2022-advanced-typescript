export function getValues(getters: EnvGetters) : Env {
    let o = {} as Env
    for (const key of Object.keys(getters) as Array<keyof EnvGetters>) {
        o[key] = getters[key]() as never;
    }
    return o
}



type EnvGetters = {
    "SERVER": () => string,
    "PORT": ()   => number
}
type Env = AllReturnTypes<EnvGetters>

type AllReturnTypes<T extends { [n: string]: (...a: any) => any }> = {
    [P in keyof T]:  ReturnType<T[P]>;
};
