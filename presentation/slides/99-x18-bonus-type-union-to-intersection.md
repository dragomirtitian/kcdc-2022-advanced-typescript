---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---


### Bonus type - `UnionToIntersection`

<question>

Can we convert a union to an intersection?
```ts
type U = { foo: number } | { bar: number }
type I = { foo: number } & { bar: number }
```

</question>

<answer>

We can use the **inference** behavior of **conditional types**.

</answer>
