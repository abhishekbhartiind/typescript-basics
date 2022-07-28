//datatype: Void | Any | Never | Unknown
// Void: set of undefined and null
// If func does not return anything then assign return type is void

const doSomething = (): void => {
  console.log("do something")
}

let foo: void = undefined

//Any: in case of unknown datatypes, you can use
//It's not a solution, just start of bigger problem

let foo2: any = "foo"
console.log(foo2.bar())

//Never
//func with never can't be executed to the end
//never is something that never happen
const doAnotherSomething = (): never => {
  throw "never"
}

//Unknown
//works similar way like any
//

let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny
//let s2: string = vUnknown

//type unknown is not assignable to type 'string'

// console.log(vAny.foo())
// console.log(vUnknown.foo())
//property foo does not exist on type 'unknown'

//# TYPE ASSERTION
//- convert one type to another
let s23: string = vUnknown as string

let pageNumber: string = "1"
let numbericPageNumber: number = pageNumber as unknown as number
