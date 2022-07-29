
type KeyOfAll<T> = T extends T ? keyof T : never

type Doctor = { name: string; specialty: string }
type Engineer = { name: string; field: string }
type Artist = { name: string; preferredMedium: string }

type AddUndefinedProps<TOriginalUnion, TUnionConstituent> = Partial<Record<Exclude<KeyOfAll<TOriginalUnion>, keyof TUnionConstituent>, undefined>>
type StrictUnion<T, TOriginal = T> = T extends T? T & AddUndefinedProps<TOriginal, T> : never;

type Person = StrictUnion< Doctor | Engineer | Artist>

let o: Person = {
    name: "",
    field: "",
    preferredMedium: "",
    specialty: ""
}