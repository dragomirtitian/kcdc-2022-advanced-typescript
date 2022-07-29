---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Bonus type - DeepReadonly 

<question>

Is it possible to create a type that makes all nested properties readonly?

```ts
type Env = {
    restApi: { server: string, port: number }
    dbServers: Array<{ server: string, port: number }>
}
type ReadonlyEnv = {
    readonly restApi: { readonly server: string, readonly port: number }
    readonly dbServers: Array<{ readonly server: string, readonly port: number }>
}
```
</question>
<answer>

We can use a **custom mapped type** that is recursive. 

</answer>
