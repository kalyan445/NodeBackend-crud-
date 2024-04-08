import express from 'express'
import Product from '../models/product.model.mjs'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.controllers.mjs'

const router = express.Router();


//CreateProduct
router.post('/',createProduct)

// gettingAll
router.get('/',getProducts )

// gettingById
router.get('/:id',getProduct)

// updating product 
router.put('/:id',updateProduct)

router.patch('/:id',deleteProduct)




export default router; 



















