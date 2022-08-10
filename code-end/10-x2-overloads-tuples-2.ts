export {}

declare function connect(host: string, port: number): void

// function connectWithMessage(message: string, ...[host, port]:Parameters<typeof connect>): void {
function connectWithMessage(
  ...[message, host, port]:[message: string, ...p:Parameters<typeof connect>]): void {
  try {
    console.log(`Connecting to ${message}`)
    connect(host, port)
  }catch(e) {
    console.log("Error occured");
  }
}