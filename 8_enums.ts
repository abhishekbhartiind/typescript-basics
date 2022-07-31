const statuses = {
  notStated: 0,
  inProgress: 1,
  done: 2,
}

console.log(statuses.inProgress) // 1

enum Status {
  NotStated,
  InProgress,
  Done,
}

// We can use enum as a value and a data type
console.log(Status.InProgress) // 1
let notStartedStatus: Status = Status.NotStated
notStartedStatus = Status.Done
