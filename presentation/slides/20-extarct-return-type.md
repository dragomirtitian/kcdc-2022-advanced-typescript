---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Inference behavior of conditional types

<question>
Give a type that contains functions that return promises, can we create a type with the same keys but the value of the promises as the property types?

```ts
type EnvGetters = {
    "SERVER": () => Promise<string>,
    "PORT": () => Promise<number>
}
type Env = {
    "SERVER": string,
    "PORT": number
}
```

</question>

<answer>

Yes, we can use **conditional types**

</answer>

--- 
### Anatomy of conditional types

```
T extends B<infer U1, infer U2, ... infer Un>
    ? R<U1, U2, ..., Un> 
    : F
```

* `infer` will introduce new type parameters
* During the matching phase they don't count towards compatibility 
* These new type parameters extract the types in `T` 
* On the true branch we can use these new type parameters
* On the false branch we can't use them (since they weren't extracted)

----
### Conditional type summary

* Conditional types have 3 behaviors
    * The type conditional behavior
    * The union distribution behavior
    * The inference behavior
