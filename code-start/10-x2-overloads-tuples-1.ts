export {}

function wrapWithLog(mesage: string, fn: any) {
  return (...a: any) => {
    console.log(`Executing ${mesage}`);
    try {
      return fn();
    } finally {
      console.log(`Executed ${mesage}`);
    }
  }
}

function connect(host: string, port: number) {
  console.log(`...Connecting to ${host}:${port}`)
}

const loggedConnect = wrapWithLog("connect", connect)