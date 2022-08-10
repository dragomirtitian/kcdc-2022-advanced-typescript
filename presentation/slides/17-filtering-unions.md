---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Filtering a union

<question>

How can we extract or exclude constituents of a union that extend a specific type:

```ts
type Shape = 
  | { radius: number, color: string } 
  | { height: number, color: string }
  | { height: number, fill: string }

type FilledShapes = { height: number, fill: string }
```

</question>

<answer>

We can use the **predefined conditional types** `Extract` and `Exclude`

</answer>

----

### The distributive property of conditional types

* Conditional types distribute over **naked** type parameters:
    * If the condition is directly on a type parameter (ex: `T extends ...`)
    * and if the type parameter is a union 
    * then the conditional is applied to each union constituent
    * and each results are unioned
    * `C<T1 | T2 | ... | Tn> = C<T1> | C<T2> | ... | C<Tn>`

----

### The distributive property of conditional types

* Conditional types distribute over **naked** type parameters:
* ```ts 
  Extract<0 | 1 | "yes" | "no", string> = T extends U ? T : never
  ```
* ```ts
  (0 extends string ? 0 :never) |
  (1 extends string ? 1 :never) |
  ("yes" extends string ? "yes" :never) |
  ("no" extends string ? "no" :never)
  ```
* ```ts
  never | never | "yes" | "no"
  ```
* ```ts
  "yes" | "no"
  ```

----

### Distributive only conditional type

* Disabling distribution:
    * Wrap the type parameter in a tuple `[T]`
    * Other types also work but depend on variance
* Sometimes we just need distribution over a union 
    * We can use an always true condition
        * `T extends T`
        * `T extends unknown`
        * `T extends any`

---

### Distributive only conditional types

<question>

Staring with the union `string | number` can we create a new union `string[] | number[]`

</question>

<answer>

Yes we can using distributive conditional types

</answer>
