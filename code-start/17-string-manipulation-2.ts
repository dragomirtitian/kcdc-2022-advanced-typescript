export {}

type Env = {
    "X_IS_ADMIN" : boolean;
    "X_SERVER": string;
    "X_MAX_REQUESTS_PER_MINUTE": number;
}

type EnvData = {
    "isAdmin": boolean,
    "isServer": string;
    "maxRequestsPerMinute": number;
}

type IS_ADMIN = "IS_ADMIN"
type AddPrefix = `X_${IS_ADMIN}`;