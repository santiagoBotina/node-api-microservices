import express from 'express'
import { success } from '../../../network/response'
const controller = require('./index')

const router = express.Router()

router.get('/', (req, res) => {
  //Controller function
  const list = controller.list()
  //Response
  success(req, res, list, 200)
})

router.get('/:id', (req, res) => {
  //id from params
  const { id } = req.params
  //Controller function
  const list = controller.get(Number(id))
  //Response
  success(req, res, list, 200)
})

router.post('/', (req, res) => {
  //id from params
  const { name } = req.body
  //Controller function
  const create = controller.create(name)
  //Response
  success(req, res, create, 200)
})

module.exports = router
