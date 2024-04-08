import express from "express"
import mongoose from 'mongoose';
import Product from './models/product.model.mjs'
import productRoute from "./route/product.route.mjs";






const app = express();
app.use(express.json())


app.use("/api/products",productRoute)



// createProduct
// app.post("/api/product", async (req,res)=>{
//     try{
//         const product = await  Product.create(req.body)
//         res.status(200).json(product)
   
//      }catch{
//        res.status(500).json({message:error.message})
   
//      }

// })

// getting all
// app.get('/api/products',async (req,res)=>{
//     
// })

// get by id

// app.get('/api/products/:id' ,async(req,res)=>{
    
// })


// update api

app.put('/api/products/:id',async (req,res)=>{
   
   
    try{
      
       
        const {id}=req.params;
        
       const product= await Product.findByIdAndUpdate(id,req.body);

    if(!product){
      return  res.status(404).json({"message":"error found"})

    }

    const updatedProduct =await findById(id);
    res.status(200).json(updatedProduct);
    console.log("updated sucessfully");

   
    }
    catch(err){
        res.status(500).json({"message":err})
    }

})


// delete

app.patch('/app/products/:id',async (req,res)=>{
    try{
        const { id } =req.params
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).send({"msg":"no product found"});

        const afterDelete = await Product.find({})
        res.send(afterDelete)

        }

    }catch(err){

        res.send({"Message":"Error found"})

    }
})





mongoose.connect('mongodb://127.0.0.1:27017/NodeCRUD')
  .then(() => {
    console.log("connected to db");
       app.listen(3000,()=>{
        console.log("server is running");
       })


  })

  .catch(()=>console.log("failed to connect"));


