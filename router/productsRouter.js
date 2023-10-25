const express = require('express');
const productController=require('../controller/product.js');
const router=express.Router();
//Crud
//1)Create 
router
.post('/',productController.getProducts)
//2)Read
//Read all product
.get('/',productController.getAllProducts)
//Read Single Product 
.get('/:id',productController.getSingleProduct)
//3)Update
//Update full product
.put('/:id',productController.replaceProduct)
//Update individual property
.patch('/:id',productController.updateProduct)
//4)Deleta
.delete('/:id',productController.deleteProduct);
exports.router=router;