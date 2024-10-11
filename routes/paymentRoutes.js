import express from 'express'
import { orderCreate } from '../controllers/orderController.js'

const router = express.Router()
router.post('/add-order',orderCreate)
export default router