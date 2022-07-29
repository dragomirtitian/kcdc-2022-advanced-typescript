export {}


type LooseBoolean = "yes" | "no" | 0 | 1;

type StringValues = LooseBoolean & string
type NumberValues = LooseBoolean & number
