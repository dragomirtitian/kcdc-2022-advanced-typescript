export {};

export class FormData<T extends object> {
  constructor(private data: T) {}

  private isValidByField: any;

  // Should be a bool for every field
  // or might not exist if validation was not performed
  // Should not be changed readonly!
  getValidity(): any { this.isValidByField; }

  // Should be readonly, don't change the object!
  getData(): T { return this.data; }

  /// Set some fields
  setSome(someFields: T) { Object.assign(this.data, someFields); }

  // Must provide values for all fields even the optional ones
  setAll(allFields: T) { this.data = allFields;}

  getSome(keys: Array<keyof T>): T {
    return keys.reduce((o, k) => ({...o, [k]: this.data[k]}), {} as T);
  }

  setValue<K extends keyof T>(key: K, value: T[K]) {
    if(value === undefined) throw Error("Don't pass undefined, use reset!")
    this.data[key] = value;
  }
}


type Person = { id: number, name: string, age: number, company?: string}
let form = new FormData<Person>({ 
  id: 1, name: "John", age: 36, company: "Decker" 
});

form.setSome({ age: 10, company: "" });
form.getValidity().company;

form.setAll({ age: 10, name: "", company: "" })


let o = form.getSome(["age", "company"])
o.age


let o2 = form.getSome(["age", "name"])
