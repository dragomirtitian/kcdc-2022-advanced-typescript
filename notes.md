## Slide - Objects types as sets

* Show the fallibility of excess property checks `01-about-sets-unions-0.ts`

### Unions - Representing options

* Show what we can access
`01-about-sets-unions-1.ts`

### Type Guards - Narrowing unions

* Show the `in` type guard
* Explain narrowing `then` / `else`

* Show `typeof` type guard in `01-about-sets-unions-2.ts` 
* Show `never` on the else branch 
* We can narrow fields
* Show the fact we are narrowing the field not the object 

### String and other literal types

* See motivating example for `02-string-literal-types.ts`
* Show the type of a constant
* Show literal types, and pairing them with unions
* Narrowing literal types
    * with `if (v === "")`
    * with `typeof v === ""`
    * with `switch`
* `assertNever`
### Strict null checking 
* Show adding and narrowing `null` / `undefined`

### Discriminated unions 

* The unstrictness of unions `03-discriminated-unions`
* Create the discriminated union
* Show the object literals
* Show narrowing of discriminated unions
* Show examples where we don't have discriminated unions
* Show example of discriminated unions with `undefined`
### Intersection and Union Reduction
* `04-intersection-union-reduction-2.ts`

* Ask people how they think they could do it


### Filtering out object types

* Ask people how they think they could do it

* `04-intersection-union-reduction-3.ts`

### Some strings preferred 

* `04-intersection-union-reduction-2.ts`

### Branded Types
* Show branded types with `any`
* Show assertion solution
* Show custom type guards
* Show custom type assertions

### Custom Mapped Types
* Start from `Record`
* Put hardcoded union
* Don't forget to mention what `P` is

### Homomorphic Mapped Types 
* Show that inlining the keys will produce different results

### Exercises
