type Env = {
    time: (a: number) => {
        day: number;
        time: number;
    }
    start: Date,
    restApi: { server: string, port: number }
    dbServers?: Array<{ server: string, port: number }>
}

type DeepReadonly<T> = {} & {
    readonly [P in keyof T]:
        T[P] extends Date ? Date :
        T[P] extends (...a: infer P) => infer R ? (...a: P) => DeepReadonly<R> :
        DeepReadonly<T[P]>;
};

type R = DeepReadonly<Env>