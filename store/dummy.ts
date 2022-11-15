import { CreateUser, Db, IStore, IUser } from './interfaces'

const db: Db = {
  user: [{ id: 1, name: 'Santiago' }]
}
//Get all
function list(table: string): IUser[] {
  return db[table as keyof typeof db]
}
//Get one
function get(table: string, id: number): IUser {
  const col = list(table)
  return col.filter((item: IUser) => item.id === id)[0] || null
}
//add
function add(table: string, data: CreateUser): Boolean {
  db[table as keyof typeof db].push({
    id: db[table as keyof typeof db].length + 1,
    ...data
  })
  return true
}
//delete
function remove(table: string, id: number): Boolean {
  return true
}

export const store: IStore = {
  list,
  get,
  add,
  remove
}
