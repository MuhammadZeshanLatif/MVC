const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));;
exports.startServer=(req,res)=>
{
    res.send("Server start....")
}
exports.getAllProducts=(req,res)=>{
    res.json(data);
}
exports.getProducts=(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.status(201).json({type:'POST'});
}
exports.getSingleProduct=(req,res)=>{
    const id = +req.params.id;
    console.log("these :"+req.params.id);
    //const product=data.find(p=>p.id===id)
    const product=data.find(p=>p.id===id)
    res.status(200).json(product);
}
exports.replaceProduct =(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    data.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json()
 }
 exports.updateProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex]
    data.splice(productIndex,1,{...singleProduct,...req.body});
    res.status(201).json()
}
exports.deleteProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = data.findIndex(p=>p.id===id);
    const singleProduct=data[productIndex];
    data.splice(productIndex,1);
    res.status(201).json('Product delete :'+singleProduct);
}