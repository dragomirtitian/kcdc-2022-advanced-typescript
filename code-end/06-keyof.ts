export {}

type Person = { name: string; age: number }
type PersonKeys = keyof Person

let a: PersonKeys 


let env = {
    "SERVER": "url",
    "PORT": 8080
}

type Env = typeof env

if(typeof env === "object") {
    
}