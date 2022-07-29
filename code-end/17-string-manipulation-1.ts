export {}

type Env = {
    "isAdmin": boolean,
    "isServer": string;
    "maxRequestsPerMinute": number;
}

type EnvData = {
    [P in keyof Env as `get${Capitalize<P>}`] : () => Env[P]
} & {
    [P in keyof Env as `set${Capitalize<P>}`] : (value: Env[P]) => void
}

type isAdmin = "isAdmin"
type getisAdmin = `get${isAdmin}`;
