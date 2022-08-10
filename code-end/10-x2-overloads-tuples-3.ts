export {}

function wrapWithLog<T extends any[], R>(message: string, fn: (...a: T) => R) {
  return (...a: T) => {
    console.log(`Executing ${message}`);
    try {
      return fn(...a);
    } finally {
      console.log(`Executed ${message}`);
    }
  }
}

function connect(host: string, port: number) {
  console.log(`...Connecting to ${host}:${port}`)
}
const loggedConnect = wrapWithLog("connect", connect)