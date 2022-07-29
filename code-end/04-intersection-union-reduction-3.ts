export {}

type Person = {
    type: "e"
    name: string;
    age: string;
    field: string
} | {
    type: "d"
    name: string;
    age: string;
    speciality: string
}

type Doctor = ({
    type: "d"
    name: string;
    age: string;
    speciality: string
} & { type: "d" } ) 