---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

<!-- 
1. What is a tuple type
2. Labeled/optional/ rest stuff
 -->

 ### Some predefined conditional types

* `ConstructorParameters` / `Parameters` - Gets the parameter types of a function or constructor
    * What kind of types do these conditional types produce?
    * A tuple type.

----

### What is a tuple type

* At runtime it is an array value 
* They are more strict: 
    * They have a fixed length
    * Each element can have a different type 

----

### Overloads with tuples 

<question>
Can we make TS understand that after the check, port is a number? 

```ts
function connect(host: string, port: number): void
function connect(cfg: { host: string, port: number }): void
function connect(cfgOrHost: { host: string, port: number } | string, maybePort?: number) {
  if (typeof cfgOrHost === "string") {
    const host = cfgOrHost;
    const port = maybePort! // Yeah, I KNOW it a port TS!
    internal(host, port);
  } else {
    internal(cfgOrHost.host, cfgOrHost.port);
  }
}
```
</question>
<answer>
Unions of tuple types can help
</answer>

----

### Can we copy parameters from another function

<question>
Can we copy parameters from another function?

```ts
declare function connect(host: string, port: number): void

function connectWithMessage(host: string, port: number): void {
  try {
    connect(host, port)
  }catch(e) {
    console.log("Error occured");
  }
}
```
</question>
<answer>

We can use `Parameters`

</answer>

----

### Can we also add parameters?

<question>

Can we add parameters when we copy parameters from another function?

```ts
declare function connect(host: string, port: number): void

function connectWithMessage(host: string, port: number): void {
  try {
    connect(host, port)
  }catch(e) {
    console.log("Error occured");
  }
}
```

</question>
<answer>

We can use `...` to spread tuple types in other tuple types.

</answer>

---

### Can we make a generic wrapper function?

<question>
Can we type a function that wraps another function: 

```ts
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
```

</question>
<answer>

Either using `Parameters`/`ReturnType` or direct inference. 

</answer>

---


### Can we transform the elements of a tuple?

<question>
Can we create a generic function that replaces parameters with Promise&lt;parameter&gt;: 

```ts
function promiseArgs<T extends any[], R>(fn: (...a: T) => R) {
  return async (...a: any[] /* Promisify T */) => {
    return await fn(... (await Promise.all(a)) as T);
  }
}
```

</question>
<answer>

Either using `Parameters` & `ReturnType` or direct inference. 

</answer>
