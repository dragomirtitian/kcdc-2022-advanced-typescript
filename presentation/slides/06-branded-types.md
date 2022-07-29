---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Branded types

<question>

How can I ensure that a string is a file path?

```ts
type Path =  string;

function copy(source: Path, destination: Path) { /*...*/ }

copy("AAA", "BBB"); // should be errors
```

</question>

<answer>

We can use branded types

</answer>

----

### What are branded types

* A primitive type intersected with an object
* The object type that ensures that the resulting type is no longer compatible with the primitive type
    * Can be done with a string literal property
    * Can be done with a unique symbol

---

### Other applications

* Generally enforce constraints on primitive types that can be traced in the type system
    * A `number` is a database id
    * A `string` is a GUID

