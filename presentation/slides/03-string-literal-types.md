---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### String and other literal types

<question>

How can I strictly type the align property of an element (it can be one of the strings: `"center"`, `"left"`, `"right"`)?

</question>
<answer>

Use string literal types

</answer>

----
### What are literal types ?

* Any value can also be a type
* The set that only has one value
* Examples of literal types:
    * `string` literal types: `"center"`, `"left"`, `"right"`
    * `number` literal types: `0`, `100`
    * `boolean` literal types: `true`, `false`
    * `null`, `undefined`
    * Other literal producing types such as enums
* They are most useful when paired with unions

---

### Narrowing unions of literals 

- Syntactic constructs that help us narrow a union
- To narrow the `value` variable:
    - `'property' in value`  - the `in` type guard
    - `typeof value === 'valid type'` - the `typeof` type guard
    * `value === constant`, `value !== constant`, `!value`, `value` expressions in `if` statements
    * `switch(value)` statements


---

### Strict null checking 

* Carves out `null` and `undefined` out of other types
* In terms of sets: The values `null` and `undefined` are not by default part of the sets described by a type

----

### Strict null checking 

* Without `strictNullChecks`: 
    * `number` - the set of all values that are floating point numbers **or `null` or `undefined`**
    * `string`- the set of all values that are strings **or `null` or `undefined`**

* With `strictNullChecks`: 
    * `number` - the set of all values that are floating point numbers
    * `string`- the set of all values that are strings
    * `string | null`- the set of all values that are strings **or `null`**