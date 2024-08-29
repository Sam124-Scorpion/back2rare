const express = require('express');
const app = express();
const port = 3000

const UserModel = require('./usermodel');


app.get('/',(req,res)=>{
    res.send("hey sam!")
})


app.get('/create', async(req,res)=>{

let createuser = await UserModel.create({
    name : "manish",
    email : "manish@gmail.com",
    username : "sam"
})
res.send(createuser);
})



app.get('/read',async(req,res)=>{
    // let readall = await UserModel.findOne({username : "sam"});
    let readall = await UserModel.find();
    res.send(readall)
})


app.use('/update', async(req,res)=>{
    let updateuser = await UserModel.findOneAndUpdate({name : "mod"},{username : "sam"},{new : true});
    res.send(updateuser);
})


app.get('/delete' , async(req,res)=>{

    let delitem = await UserModel.findOneAndDelete();
    res.send(delitem);
})



app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})
