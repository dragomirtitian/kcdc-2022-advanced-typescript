export {}

const env = {
    "SERVER": "",
    "PORT": 7808
}

type Env = typeof env;

function getValue<K extends keyof Env>(s: K):Env[K] {
    return (env as any)[s];
}


let server = getValue("SERVER"); // ideally string
let port = getValue("PORT") // ideally number
let pport = getValue("PPORT") // ideally error