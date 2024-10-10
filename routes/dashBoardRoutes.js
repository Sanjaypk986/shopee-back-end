import express from 'express'
import { deleteProduct, productCreate, TotalProducts, TotalSalesAmount, UpdateQuantity } from '../controllers/dashBoardController.js'


const router = express.Router()

router.get('/all-products', TotalProducts)
router.get('/total-amount' , TotalSalesAmount)
router.post('/create',productCreate)
router.patch('/update',UpdateQuantity)
router.delete('/delete',deleteProduct)


export default router