import Product from "../models/product.model.mjs"




// createProduct

export const createProduct=async(req,res)=>{
  
  try{
        const product = await  Product.create(req.body)
        res.status(200).json(product)
   
     }catch(err){
       res.status(500).json({"message":err.message})
   
     }

}


// getAllProduct
export const getProducts=async(req,res)=>{
  try{
           const products = await Product.find({});
            res.status(200).json(products);
    
    
         }catch(error){
             res.status(500).json({message: error.message})
    
        }


}

// gettingSingleProduct

export const  getProduct=async(req,res)=>{

  try{

    const {id} =req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)


}catch(error){
    console.log({message:error});

}

}

export const updateProduct=async(req,res)=>{

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


  
}



export const deleteProduct=async(req,res)=>{
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


}


