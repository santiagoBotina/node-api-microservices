import { list } from '../../../store/dummy'

const TABLA = 'user'

export function listData() {
  return list(TABLA)
}
