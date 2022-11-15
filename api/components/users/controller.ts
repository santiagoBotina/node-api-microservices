import { CreateUser } from './../../../store/interfaces/index'
import { store } from '../../../store/dummy'
import { IStore } from '../../../store/interfaces'

const TABLA = 'user'

export const ctrl = (injectedStore: IStore) => {
  //Data init
  let db = injectedStore
  if (!db) db = store
  //---CRUD functions----
  //get all
  function list() {
    return store.list(TABLA)
  }
  //get one
  function get(id: number) {
    return store.get(TABLA, id)
  }
  //Create one
  function create(body: CreateUser) {
    return store.add(TABLA, body)
  }
  return {
    list,
    get,
    create
  }
}
