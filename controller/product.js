const fs=require('fs');
const _products=JSON.parse(fs.readFileSync('data.json','utf-8'));;
const products=_products.products;
exports.getAllProducts=(req,res)=>{
    res.json(products);
}
exports.getProducts=(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.status(201).json({type:'POST'});
}
exports.getSingleProduct=(req,res)=>{
    const id = +req.params.id;
    console.log("these :"+req.params.id);
    //const product=products.find(p=>p.id===id)
    const product=products.find(p=>p.id===id)
    res.status(200).json(product);
}
exports.replaceProduct =(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json()
 }
 exports.updateProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const singleProduct=products[productIndex]
    products.splice(productIndex,1,{...singleProduct,...req.body});
    res.status(201).json()
}
exports.deleteProduct=(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const singleProduct=products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json('Product delete :'+singleProduct);
}