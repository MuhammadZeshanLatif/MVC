require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
//Make a router
const productRouter=require('./router/productsRouter.js');
const usersRouter=require('./router/usersRouter.js');
console.log('env',process.env.DB_PASSWORD);
server
.use('/products',productRouter.router)
.use('/users',usersRouter.router)
.use(morgan('default'))
.use(express.static(process.env.PUBLIC_DIR))
.use(express.json())
.listen(process.env.PORT);
