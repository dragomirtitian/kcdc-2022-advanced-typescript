declare function internal(host: string, port: number): void;

function connect(cfg: { host: string, port: number }): void
function connect(host: string, port: number): void
function connect(cfgOrHost: { host: string, port: number } | string, maybePort?: number) {
  if (typeof cfgOrHost === "string") {
    const host = cfgOrHost;
    const port = maybePort! // Yeah, I KNOW it a port TS!
    internal(host, port);
  } else {
    internal(cfgOrHost.host, cfgOrHost.port);
  }
}