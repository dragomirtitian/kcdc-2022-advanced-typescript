---
title: Fun with conditional types
marp: true
theme: kubi
footer: '![techatbloomberg.com](./media/techatbloomberg.png) © 2021 Bloomberg Finance L.P. All rights reserved. ![techatbloomberg.com](./media/bloomberg.png)'
---

### Safe get function 

<question>

How can we make a function to get a value in an object safely

```ts
const env = {
    "SERVER": "",
    "PORT": 7808
}

let server = getValue("SERVER"); // ideally string
let port = getValue("PORT") // ideally number
let pport = getValue("PPORT") // ideally error
```

</question>

<answer>

Use index access types, `keyof` and a generic function

</answer>

