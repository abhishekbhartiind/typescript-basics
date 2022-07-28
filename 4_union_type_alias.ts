type ID = string
type PopularTag = string
type MayBePopularTag = PopularTag | null

interface IUser {
  id: ID
  name: string
  surname: string
}

const popularTags: PopularTag[] = ["dragon", "coffee"]

const dragonTag: MayBePopularTag = "dragon"

let username: string = "alex"

let pageName: string | number = "1"

let errorMessage: string | null = null

let userData: IUser | null = null

let someProps: string | number | null | undefined | string[] | object
