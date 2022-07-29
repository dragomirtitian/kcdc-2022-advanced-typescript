export function getValues(getters: EnvGetters, defaultVaues: Env) : Env {
    let o = {} as Env
    for (const key of Object.keys(getters) as Array<keyof EnvGetters>) {
        const getter = getters[key];
        o[key] = (getter ? getter() : defaultVaues[key]) as never;
    }
    return o
}

type EnvGetters = {
    "SERVER"?: () => string,
    "PORT": () => number
}
type Env = {
    "SERVER": string,
    "PORT": number
}
