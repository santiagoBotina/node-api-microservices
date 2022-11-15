export type IUser = {
  id: number
  name: string
}

export type CreateUser = {
  name: string
}

export interface Db {
  user: IUser[]
}

export interface IStore {
  list: (table: string) => IUser[]
  get: (table: string, id: number) => IUser
  add: (table: string, data: CreateUser) => Boolean
  remove: (table: string, id: number) => Boolean
}
