---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Some predefined conditional types

* `Omit` - Removes specific types from an object type
* `Exclude<T,U>`-Removes constituents that extend `U` from a union `T`
    *  `NonNullable<T>` - Removes `null` and `undefined` from `T`
* `Extract<T,U>`-Gets constituents that extend `U` from a union `T`
* `Awaited` - Unwraps a promise type.
* `ReturnType` / `InstanceType` - Gets the return type of a function or constructor
* `ConstructorParameters` / `Parameters` - Gets the parameter types of a function or constructor

