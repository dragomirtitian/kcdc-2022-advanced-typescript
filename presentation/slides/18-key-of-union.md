---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Distributive conditional types

<question>
How can I get all the keys from all union constituents:

```ts
type Person =
    | { name: string; field: string }
    | { name: string; specialty: string }

type Keys = KeyOfAll<Person> // "name" | "specialty" | "field"
```
</question>
<answer>

We can use **distributive conditional types**

</answer>
