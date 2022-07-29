---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---


### Manipulate Strings - Concatenation

<question>

Can we create a type that has `get` / `set` methods for each member of another type?
```ts
type Env = {
    "isServer": string;
    "maxRequestsPerMinute": number;
}
type EnvData = {
    "getIsServer": () => string;
    "getMaxRequestsPerMinute": () => number;
}
```
</question>
<answer>

We can use **template literal types**

</answer>

---

### String Manipulation 

* We can concatenate strings using template literal types
* We can do some more complex transformations using intrinsic types:
    * `Capitalize` - `Capitalize<"initData"> = "InitData"`
    * `Uncapitalize` - `Uncapitalize<"InitData"> = "initData"`
    * `Uppercase` - `Uppercase<"Init"> = "INIT"`
    * `Lowercase` - `Uppercase<"Init"> = "init"`

---


### Manipulate Strings

<question>

How can we transform snake case properties names to camel case property names?

```ts
type Env = {
    "X_IS_ADMIN" : boolean;
    "X_MAX_REQUESTS_PER_MINUTE": number;
}
type EnvData = {
    "isAdmin": boolean,
    "maxRequestsPerMinute": number;
}
```
</question>

<answer>

We can use **template literal types** in **recursive conditional types**.

</answer>
