const fs=require('fs');
const _users=JSON.parse(fs.readFileSync('data.json','utf-8'));;
const users=_users.users;
exports.getAllUsers=(req,res)=>{
    res.json(users);
}
exports.getUsers=(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(201).json({type:'POST'});
}
exports.getSingleUsers=(req,res)=>{
    const id = +req.params.id;
    console.log("these :"+req.params.id);
    //const product=users.find(p=>p.id===id)
    const Users=users.find(p=>p.id===id)
    res.status(200).json(Users);
}
exports.replaceUsers =(req,res)=>{
    const id = +req.params.id;
    const UsersIndex = users.findIndex(p=>p.id===id);
    users.splice(UsersIndex,1,{...req.body,id:id});
    res.status(201).json()
 }
 exports.updateUsers=(req,res)=>{
    const id = +req.params.id;
    const UsersIndex = users.findIndex(p=>p.id===id);
    const singleUsersIndex=users[UsersIndex]
    users.splice(productIndex,1,{...singleUsersIndex,...req.body});
    res.status(201).json()
}
exports.deleteUsers=(req,res)=>{
    const id = +req.params.id;
    const UserIndex = users.findIndex(p=>p.id===id);
    const singleUser=users[UserIndex];
    users.splice(UserIndex,1);
    res.status(201).json('Product delete :'+singleUser);
}
