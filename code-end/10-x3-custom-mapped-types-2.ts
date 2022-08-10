export function getValues(getters: EnvGetters, defaultValues: Env) : Env {
    let o = {} as Env
    for (const key of Object.keys(getters) as Array<keyof EnvGetters>) {
        const getter = getters[key];
        o[key] = (getter ? getter() : defaultValues[key]) as never;
    }
    return o
}
getValues({
    PORT: () => 81,    
}, {
    PORT: 1,
    SERVER: ""
})

type EnvGetters = {
    "SERVER": () => string,
    "PORT": () => number
}

type Env = {
    [P in keyof EnvGetters]: ReturnType<NonNullable<EnvGetters[P]>>
}


