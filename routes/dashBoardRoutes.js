import express from 'express'
import { productCreate, UpdateQuantity } from '../controllers/dashBoardController.js'


const router = express.Router()

router.post('/create',productCreate)
router.patch('/update',UpdateQuantity)


export default router