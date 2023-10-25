const productController=require('./controller/product.js');
//make server with express
const express = require('express');
const morgan = require('morgan');
const server = express();
//Make a router
const productRouter=express.Router();
server.use('/api',productRouter);
server.use(morgan('default'))
server.use(express.static('public'));
server.use(express.json())

//Crud
//1)Create 
productRouter
.post('/products',productController.getProducts)
//2)Read
//Read all product
.get('/products',productController.getAllProducts)
//Read Single Product 
.get('/products/:id',productController.getSingleProduct)
//3)Update
//Update full product
.put('/products/:id',productController.replaceProduct)
//Update individual property
.patch('/products/:id',productController.updateProduct)
//4)Deleta
.delete('/products/:id',productController.deleteProduct)
//Model-View-controller
//Server start
server.get('/demo',productController.startServer);
server.listen(8080)
