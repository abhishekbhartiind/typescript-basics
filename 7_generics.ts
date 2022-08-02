const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)

  return {
    ...obj,
    id,
  }
}
// obj is implicitly has any type,
// but a better type may be inferred from usage

// - All Generic data types are written inside "<>"
// Big <T> is a default name of generic, we can use T as data type

interface IUserInterface<T, V> {
  name: string
  data: T
  meta: V
}

/**
 * If we add generic T, we are assigning data property of type T.
 * Now it will call as generic interface.
 * Generics allow us to provide different data types
 */

const userG: IUserInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "some user",
}

const userG2: IUserInterface<string[], string> = {
  name: "John",
  data: ["foo", "bar"],
  meta: "some user",
}

const result = addId<IUserInterface<{ meta: string }, string>>(userG)
//<{ meta: string }, string>
//const result = addId<string>("foo")

console.log(result)

/**
 * Here addId func has generic T so all generic property
 * is written inside <T>. we can also use as data type
 *
 * addId<IUserInterface>(user) has generic property of add func
 * addId<string>("foo") has string property whereas genertic T extends
 * object property
 */

//  = Example
//export function append<T>(el: T, list: readonly T[]): T[]
// const seachStr = "foo"
// const hasSearchedString = any<string>(
//   (el: string) => el.contains(seachStr),
//   ["fooooo", "bar", "baz"]
// )
