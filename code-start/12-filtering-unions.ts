type Shape = 
  | { radius: number, color: string } 
  | { height: number, color: string }
  | { height: number, fill: string }


type LooseBoolean = "yes" | "no" | 0 | 1;