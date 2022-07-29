
export {}

function promiseArgs<T extends any[], R>(fn: (...a: T) => R) {
  return async (...a: any[] /* Promisify T */) => {
    return await fn(... (await Promise.all(a)) as T);
  }
}

function connect(host: string, port: number) {
  console.log(`...Connecting to ${host}:${port}`)
}
const host = Promise.resolve("connect")
const port = Promise.resolve(8080)

const promisifyedConnect = promiseArgs(connect);
promisifyedConnect(host, port);
promisifyedConnect(port, host);


