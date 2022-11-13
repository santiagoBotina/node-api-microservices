type User = {
  id: number
  name: string
}

interface Db {
  user: User[]
}

const db: Db = {
  user: [{ id: 1, name: 'Santiago' }]
}

export const list = (table: string) => {
  return db[table]
}
export const get = (table: string, id: number) => {
  const col = list(table)
  return col.filter((item: User) => item.id === id)[0] || null
}
export const upsert = (table: string, data: object) => {
  db[table].push(data)
}
export const remove = (table: string, id: number) => {
  return true
}
