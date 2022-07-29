export class FormData<T extends object> {
  constructor(private data: T) {}

  /// Set some fields
  setSome(someFields: Partial<T>) { Object.assign(this.data, someFields); }

  private isValidByField!: Record<keyof T,  boolean>;

  // Should be a bool for every field
  // or might not exist if validation was not performed
  // Should not be chnaged readonly!
  getValidity(): Record<keyof T,  boolean> { return this.isValidByField; }

  // Should be readonly, don't change the object!
  getData(): Readonly<T> { return this.data; }

  // Must provide values for all fields even the optional ones
  setAll(allFields: Required<T>) { this.data = allFields;}

  getSome<K extends keyof T>(keys: Array<K>): Pick<T, K> {
    return keys.reduce((o, k) => ({...o, [k]: this.data[k]}), {} as T);
  }
}

type Person = { name: string, age: number, company?: string}
type P = Pick<Person, "name" | "company">
let form = new FormData<Person>({ name: "John", age: 36, company: "Decker" });

form.setSome({ age: 10, company: "" });
form.getValidity().company;

form.setAll({ age: 10, name: "", company: "" })

let o = form.getSome(["age", "company"])
o.age


let o2 = form.getSome(["age", "name"])
