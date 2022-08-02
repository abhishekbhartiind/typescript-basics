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

interface Student {
  id: number
}

const printStudentId = (student: Student) => {
  console.log(student.id)
}

let student = { id: 10 }
printStudentId(student)

interface PartTimeCourseLoad {
  firstGrade: number
  secondGrade: number
}

interface FullTimeCourseLoad {
  firstGrade: number
  secondGrade: number
  thirdGrade: number
}

const computeAverage = (partTimeCourseLoad: PartTimeCourseLoad) => {
  return (partTimeCourseLoad.firstGrade + partTimeCourseLoad.secondGrade) / 200
}

const printAverage = (fullTimeCourseLoad: FullTimeCourseLoad) => {
  const average = computeAverage(fullTimeCourseLoad)

  console.log(`Your full time course load average is ${average}`)
}

printAverage({
  firstGrade: 20,
  secondGrade: 100,
  thirdGrade: 100,
})
