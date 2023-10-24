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


//API -Endpoint -Roite

//Product

// API ROOT=>product
//Base URL, google.com/api/vs OR localhost etc

//Read GET/Product ==> can call by two method

  //First complete
server.get('/products',(req,res)=>{
    res.json(data);
}); 




//CRUD operation

// 1):-Create

server.post('/products',(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.status(201).json({type:'POST'});
});




// 2):-Read
////Second by makeing route of individual product
server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    console.log("these :"+req.params.id);
    //const product=data.find(p=>p.id===id)
    const product=data.find(p=>p.id===id)
    res.status(200).json(product);
});

// 3):- Update 
//There are two methods for update data
//i) put
//In put we override data
 server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    data.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json()
 })
//ii)Patch ==> most recommended
// in patch we only modify the individual properties
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex]
    data.splice(productIndex,1,{...singleProduct,...req.body});
    res.status(201).json()
});

server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex];
    data.splice(productIndex,1);
    res.status(201).json('Product delete :'+singleProduct);
});

server.get('/demo',(req,res)=>
{
    res.send("Server start....")
});
server.listen(8080)
