const express = require('express');
const UsersController=require('../controller/users.js');
const router=express.Router();
//Crud
//1)Create 
router
.post('/',UsersController.getUsers)
//2)Read
//Read all Users
.get('/',UsersController.getAllUsers)
//Read Single Users 
.get('/:id',UsersController.getSingleUsers)
//3)Update
//Update full Users
.put('/:id',UsersController.replaceUsers)
//Update individual property
.patch('/:id',UsersController.updateUsers)
//4)Deleta
.delete('/:id',UsersController.deleteUsers);
exports.router=router;