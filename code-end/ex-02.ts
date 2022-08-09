interface Person {
    name: string,
    lastName: string,
    age: number
}

type Validators<T> = {
    [P in keyof T]-?: (value: T[P]) => boolean
}

function validateAllFields(p: Person, validator: Validators<Person>) {
    for(const key of Object.keys(p) as Array<keyof Person>) {
        if(!validator[key](p[key] as never)) {
            console.log(`Invalid ${key}`)
        }
    }
}


let person:Person = {
    name: "John",
    lastName: "Oliver",
    age: 30
}

// How can we have inference for v
// and make sure all field are validated
validateAllFields(person, {
    age: v => v > 0,
    lastName: v => !!v.length,
    name: v => !!v.length,
})