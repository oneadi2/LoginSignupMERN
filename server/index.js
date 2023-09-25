const express = require('express')
const mongoose=require("mongoose");

const cors =require("cors");
const EmployeeModel=require('./models/Employee');

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://oneadichikpea01:Oneadidev12345@cluster0.wo4sj74.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000)).then(()=>console.log("Connected to database port 5000"))

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success");
            }else{
                res.json("The password is incorrect");
            }
        }else{
            res.json("No record existed");
        }
    })
});

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body) // mongodb function
    .then(employees=>res.json(employees)
    .catch(err=>res.json(err)))
});

// app.get('/',(req,res)=>{
//     EmployeeModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//            return res.json(user);
//         }else{
//             res.json("No record existed");
//         }
//     })
    
// })

// app.listen(3001,()=>{
//     console.log("Server is running");
// })