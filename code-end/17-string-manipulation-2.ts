export {}

type Env = {
    "X_IS_ADMIN" : boolean;
    "X_SERVER": string;
    "X_MAX_REQUESTS_PER_MINUTE": number;
}

type EnvData = {
    [P in keyof Env as ConvertToCamelCase<RemovePrefix<P>>]: Env[P]
}

type AddPrefix<P extends string> = `X_${P}`;
type RemovePrefix<P extends string> = P extends AddPrefix<infer R> ? R: never;

type ConvertToCamelCase<T extends string> = T extends `${infer H}_${infer T}` ? `${Lowercase<H>}${RemoveUnderscores<T>}` : Lowercase<T>
type RemoveUnderscores<T extends string> = 
    T extends `${infer H}_${infer T}` ? `${Capitalize<Lowercase<H>>}${RemoveUnderscores<T>}`: Capitalize<Lowercase<T>>;
type R = ConvertToCamelCase<"MAX_REQUESTS_PER_MINUTE">
