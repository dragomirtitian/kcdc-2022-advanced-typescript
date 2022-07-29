export {}

interface Person { lastName?: string, firstName?: string, middleName?: string };
function getPersonFullName(person: Person) {
  let fullName = ""
  for(let k of Object.keys(person)) {
    let value = person[k as keyof Person];
    if(!value) continue;
    fullName += " " + value.toUpperCase()
  }
}

let r1 = getPersonFullName({ firstName: "John" })

let r2 = getPersonFullName({
    firstName: "John",
    lastName: "Smith"
})

let r3 = getPersonFullName({
    firstName: "John",
    lastName: "Smith",
    age: 30,
})