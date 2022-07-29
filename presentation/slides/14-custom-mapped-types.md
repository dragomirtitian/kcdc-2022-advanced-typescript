---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Custom mapped types

<question>

How can we create a `type` with return type of all functions in another type
```ts
type EnvGetters = {
    "SERVER": () => string,
    "PORT": () => number
}
type Env = {
    "SERVER": string,
    "PORT": number
}
```
</question>
<answer>

Use a custom mapped type in conjunction with the conditional type `ReturnType`

</answer>

----

### Basic Anatomy of a Mapped Type

`{ [P in K]: U }`

* `P in K` take each `P` in `K`
    * `K` is usually a union (ex: `"name" | "field"`)
    * `P` will be each constituent of the union (ex `"name"`, `"field"`)
    * `P` is a type parameter and can be used anywhere a type would be used inside `U`

----

### Basic Anatomy of a Mapped Type

`{ [P in K]: U }`

- `P in K` take each `P` in `K`
* `: U` - The type of the property `P`
    * `U` can be any type expression
        *  Valid values of `U`: `string`, `number`, `typeof env`
    * `U` can depend on `P`
        * Valid values of `U`: `P`, `Env[P]`, `T[P]`

---

### Homomorphic mapped types 

`{ [P in keyof T]: U }`
`type G<K extends keyof T> = { [P in K]: U}`

* Homomorphic mapped types preserver structure
* The type use in the `in` clause is:
    * `keyof T` - The modifiers of T are preserved
    * a type parameter that extends `keyof T` - The modifiers of `T` are preserved

---

### Manipulating modifiers 

* `{ readonly  [P in keyof T]: U }` - add `readonly` modifier
* `{ -readonly [P in keyof T]: U }` - remove `readonly` modifier
* `{ [P in keyof T] ?: U }` - add `?` modifier
* `{ [P in keyof T]-?: U }` - remove `-?` modifier



