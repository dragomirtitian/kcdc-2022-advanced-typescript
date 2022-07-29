function withNumberOrString(p: { foo: string | number | boolean }) {
    if (typeof p.foo === "string") {
        p.foo.charAt(0)
    }else if(typeof p.foo === "boolean") {
        p.foo
        withBooleanFoo(p);
    } else if(typeof p.foo === "number"){
        p.foo.toFixed
    } else {
        p.foo
    }
}

function withBooleanFoo(p: { foo: boolean }) {

}