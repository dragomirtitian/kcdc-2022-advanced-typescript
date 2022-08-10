interface Engineer {
    name: string;
    age: string;
    field: string
}

interface Doctor {
    name: string;
    age: string;
    speciality: string
}

function printPerson(p: Engineer | Doctor) {
    console.log(p.speciality)
}




export {}