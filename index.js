//make server with express
const express = require('express');
const morgan = require('morgan');
const server = express();
//Make a router
const productRouter=require('./router/productsRouter.js')
const usersRouter=require('./router/usersRouter.js')
server
.use('/products',productRouter.router)
.use('/users',usersRouter.router)
.use(morgan('default'))
.use(express.static('public'))
.use(express.json())
.listen(8080);
