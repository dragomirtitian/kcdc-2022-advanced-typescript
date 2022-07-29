export {}

type Doctor = { name: string; specialty: string }
type Engineer = { name: string; field: string }

let doctor: Doctor = { name: "John", specialty: "" field: "" };
let engineer: Engineer = { name: "John", specialty: "", field: "" };
let person: Doctor | Engineer = { name: "John", specialty: "", field: "" };


