interface UserInterface {
  name: string
  age?: number
  getMessage(): string
}

// const User: { name: string; age: number } = {
//   name: "Moster",
//   age: 30,
// }

const user: UserInterface = {
  name: "Moster",
  age: 30,
  getMessage() {
    return "Hello" + name
  },
}

const user2: UserInterface = {
  name: "Jack",
  getMessage() {
    return "Hello" + name
  },
}

console.log(user.getMessage())
