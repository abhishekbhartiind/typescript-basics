interface IUserFuncInterface {
  getFullName(): string
}

// class must implement getFullName(), otherwise throws error
class User implements IUserFuncInterface {
  firstName: string
  private lastName: string
  readonly unChangeableName: string
  static readonly maxAge = 50

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.unChangeableName = firstName
  }

  getFullName(): string {
    return this.firstName + "" + this.lastName
  }

  changeUnChangeableName(): void {
    //this.unChangeableName = "foo"
  }
}

const userObj = new User("abhishek", "bharti")
console.log(userObj.getFullName())
console.log(userObj.firstName)
//static property value can be accessed by class
console.log(User.maxAge)
//private: property can't be accessed outside
//Protected: it's allowed in class and it's children
//readonly
//static property

class Admin extends User {
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}
const admin = new Admin("foo", "bar")
