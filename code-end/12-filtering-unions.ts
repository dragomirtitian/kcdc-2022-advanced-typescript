type Shape = 
  | { radius: number, color: string } 
  | { height: number, color: string }
  | { height: number, fill: string }

type FilledShapes = Exclude<Shape, { fill : any }>



type LooseBoolean = "yes" | "no" | 0 | 1;

type Extract2<T, U> = T extends U ? T : never;

type StringLooseBoolean2 = Extract2<LooseBoolean, string>
type StringLooseBoolean3 = LooseBoolean extends string ? LooseBoolean : never; // ❌

type StringLooseBoolean = Extract<LooseBoolean, string>
type NumberLooseBoolean = Exclude<LooseBoolean, string>


