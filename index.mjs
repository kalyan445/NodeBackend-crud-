import express from "express"
import mongoose from 'mongoose';
import Customer from "./models/customer.model.mjs";
import { createCustomer } from "./controllers/customer.controllers.mjs";



const app = express();
app.use(express.json())


app.use(express.json());
app.use('/api/customer',createCustomer)


mongoose.connect('mongodb://127.0.0.1:27017/myGym')
  .then(() => {
    console.log("connected to db");
       app.listen(4000,()=>{
        console.log("server is running");
       })


  })

  .catch(()=>console.log("failed to connect"));





  
// app.use("/api/products",customerRoute)



// createCustomer


// // getting all
// // app.get('/api/products',async (req,res)=>{
// //     
// // })

// // get by id

// // app.get('/api/products/:id' ,async(req,res)=>{
    
// // })


// // update api

// app.put('/api/products/:id',async (req,res)=>{
   
   
//     try{
      
       
//         const {id}=req.params;
        
//        const product= await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return  res.status(404).json({"message":"error found"})

//     }

//     const updatedProduct =await findById(id);
//     res.status(200).json(updatedProduct);
//     console.log("updated sucessfully");

   
//     }
//     catch(err){
//         res.status(500).json({"message":err})
//     }

// })


// // delete

// // app.patch('/app/products/:id',async (req,res)=>{
// //     try{
// //         const { id } =req.params
// //         const product = await Product.findByIdAndDelete(id);

// //         if(!product){
// //             res.status(404).send({"msg":"no product found"});

// //         const afterDelete = await Product.find({})
// //         res.send(afterDelete)

// //         }

// //     }catch(err){

// //         res.send({"Message":"Error found"})

// //     }
// // })


