export {}

type Result = 
    | { error: undefined, data: [] }
    | { error: Error, message: string}

function withResult(p: Result) { 
    
}
