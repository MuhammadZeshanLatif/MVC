const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const index=fs.readFileSync('index.html','utf-8');
const errorPage=fs.readFileSync('error.html','utf-8');
const products=data;

//make server with express
const express = require('express');
const morgan = require('morgan');
const server = express();

server.use(morgan('default'))
server.use(express.static('public'));
server.use(express.json())

const startServer=(req,res)=>
{
    res.send("Server start....")
}
const getAllProducts=(req,res)=>{
    res.json(data);
}
const getProducts=(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.status(201).json({type:'POST'});
}
const getSingleProduct=(req,res)=>{
    const id = +req.params.id;
    console.log("these :"+req.params.id);
    //const product=data.find(p=>p.id===id)
    const product=data.find(p=>p.id===id)
    res.status(200).json(product);
}
const replaceProduct =(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    data.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json()
 }
 const updateProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex]
    data.splice(productIndex,1,{...singleProduct,...req.body});
    res.status(201).json()
}
const deleteProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex];
    data.splice(productIndex,1);
    res.status(201).json('Product delete :'+singleProduct);
}

//Crud
//1)Create 
server.post('/products',getProducts);
//2)Read
//Read all product
server.get('/products',getAllProducts);
//Read Single Product 
server.get('/products/:id',getSingleProduct);
//3)Update
//Update full product
server.put('/products/:id',replaceProduct);
//Update individual property
server.patch('/products/:id',updateProduct);
//4)Deleta
server.delete('/products/:id',deleteProduct);


//Server start
server.get('/demo',startServer);
server.listen(8080)
