import express from 'express'
import { success } from '../../../network/response'
import { listData } from './controller'

const router = express.Router()

router.get('/', (req, res) => {
  const list = listData()
  success(req, res, list, 200)
})

module.exports = router
