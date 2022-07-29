type Shape = 
  | { radius: number, color: string } 
  | { height: number, color: string }
  | { height: number, fill: string }

type FilledShapes = Exclude<Shape, { fill : any }>



type LooseBoolean = "yes" | "no" | 0 | 1;

type Extract2<T, U> = T extends U ? T : never;

type StringLooseBolean2 = Extract2<LooseBoolean, string>
type StringLooseBolean3 = LooseBoolean extends string ? LooseBoolean : never; // ❌

type StringLooseBolean = Extract<LooseBoolean, string>
type NumberLooseBolean = Exclude<LooseBoolean, string>


