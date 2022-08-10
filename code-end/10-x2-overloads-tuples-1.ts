export {}
declare function internal(host: string, port: number): void;

function connect(...args: 
  | [cfg: { host: string, port: number }]
  | [host: string, port: number]) {
  if (args.length === 2) {
    const [host, port] = args;
    internal(host, port);
  } else {
    const [cfg] = args;
    internal(cfg.host, cfg.port);
  }
}