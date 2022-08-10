export {}

function getSampleData(value: "string" | "number"): string | number {
    return value === "string" ? "Test Data" : 0
}


let n = getSampleData("number")
let s = getSampleData("string")
let ns = getSampleData(Math.random() > 0.5 ? "string": "number")