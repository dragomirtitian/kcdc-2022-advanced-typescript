---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Exercise - Unions

* Scan the playground link or go to `code-start\ex-01.ts` <img src="./media/ex-01-qr.png" style="position:absolute; top:120px; left: 1050px; width: 200px" />

* Change `type Animal = any;` to be more type safe
* Fix `printAnimalInfo` to be ensure the checks are exhaustive
    * Might involve changes to the animal interfaces
* Ensure that this line is an error: `dog = store.getCat(dog.id!);`
