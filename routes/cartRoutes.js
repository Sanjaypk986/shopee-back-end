import express from 'express'
import { addProductToCart, getAllCartItems } from '../controllers/cartController.js'


const router = express.Router()
router.post('/add-cart',addProductToCart)
router.get('/all-cart-items',getAllCartItems)

export default router