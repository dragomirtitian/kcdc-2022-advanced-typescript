export {}


type Ret<T> = T extends "string" ? string : number
function getSampleData<T extends "string" | "number">(value: T): Ret<T> {
    return (value === "string" ? "Test Data" : 0) as Ret<T>
}

let n = getSampleData("number")
let s = getSampleData("string")
let ns = getSampleData(Math.random() > 0.5 ? "string": "number")