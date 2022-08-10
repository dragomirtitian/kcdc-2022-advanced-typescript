export {}

type Doctor = { type: "d", name: string; specialty: string }
type Engineer = { type: number, name: string; field: string }
type Artist = { type: boolean, name: string; field: string }

function printPerson(p: Doctor | Engineer | Artist) { 
    if(p.type === "d") {
        withDoctor(p)
    } else {
        if (typeof p.type === "number") {
            p.type
        }
    }
}

function withDoctor(p:Doctor) {}


