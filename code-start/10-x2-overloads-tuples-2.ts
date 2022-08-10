export {}

declare function connect(host: string, port: number): void

function connectWithMessage(message: string, host: string, port: number): void {
  try {
    console.log(`Connecting to ${message}`)
    connect(host, port)
  }catch(e) {
    console.log("Error occured");
  }
}