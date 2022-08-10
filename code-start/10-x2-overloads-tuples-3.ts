export {}
type P = Parameters<typeof wrapWithLog>

function wrapWithLog(message: string, fn: any) {
  return (...a: any) => {
    console.log(`Executing ${message}`);
    try {
      return fn();
    } finally {
      console.log(`Executed ${message}`);
    }
  }
}

function connect(host: string, port: number) {
  console.log(`...Connecting to ${host}:${port}`)
}

const loggedConnect = wrapWithLog("connect", connect)