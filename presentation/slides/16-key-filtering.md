---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Conditional Types

<question>

How can we correctly type a function that return a `string` or a `number` based on the type of a passed in parameter 

```ts
function getSampleData(value: "string" | "number"): string | number {
    return value === "string" ? "Test Data" : 0
}
```
</question>

<answer>

We can use conditional types

</answer>

---

### Anatomy of Conditional Types

```ts
type X = TestedType extends PotentialBaseType ? TypeIfTrue: TypeIfFalse
```
* Similar syntax to conditional operator `cond ? tValue: fValue`
* `TestedType` - Any type we want to test 
* `extends` - no other operator is possible 
* `PotentialBaseType` - Any type we think might be base type
* `TypeIfTrue` result if `TestedType extends PotentialBaseType`
* `TypeIfFalse` result if condition not true

----

### Filter Keys of Types

<question>

How can we get the properties of a specific type from a given type

```ts
type Book = {
    pages: number;
    fontSize: number;
    name: string;
    author: string
}
type StringKeys = "name" | "author"
```
</question>

<answer>

We can use mapped and conditional types

</answer>

---


### Mapped Type With `as`clause

`{ [P in K as C]: U }`

* `P` will take the values in `K`
* `C` will be used as the key of the final type. Not `P`
    * `C` can be any type that depends on `P` 
    * `C` must be 
        * valid key for a type: (a subtype of `number`, `string` or `symbol`)
        * `never`
    * If `C` is `never` that property will be removed form the result
    * Usually a `C` will be a conditional type
