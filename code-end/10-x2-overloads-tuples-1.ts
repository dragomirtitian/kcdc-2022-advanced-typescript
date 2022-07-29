export {}

function wrapWithLog<T extends any[], R>(mesage: string, fn: (...a: T) => R) {
  return (...a: T) => {
    console.log(`Executing ${mesage}`);
    try {
      return fn(...a);
    } finally {
      console.log(`Executed ${mesage}`);
    }
  }
}

function connect(host: string, port: number) {
  console.log(`...Connecting to ${host}:${port}`)
}
const loggedConnect = wrapWithLog("connect", connect)