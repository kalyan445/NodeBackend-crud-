import Customer from "../models/customer.model.mjs"
import validator from 'validator'





// createProduct

export const createCustomer=async(req,res)=>{
  
  try{
    const {full_name,Address,Phone,email,timespans }=req.body;

    if(!full_name || !Address|| !Phone){
        
      return res.status(400).json({"message":"please fill all the fields "})
    
    }

    if(!validator.isEmail(email)){
      return res.status(400).json({"message":"please entr the valid email"})
    }

    if(!validator.isMobilePhone(Phone)){
      return res.status(400).json({"message":"All fields are required"})

    }

    const customerData ={
      full_name:full_name,
      Address:Address,
      Phone:Phone,
      email:email,
      timespans:timespans


    }




        const customer = await  Customer.create(customerData)
        res.status(200).json(customer)
   
     }catch(err){
       res.status(500).json({"message":err.message})
   
     }

}


// // getAllProduct
// export const getProducts=async(req,res)=>{
//   try{
//            const products = await Product.find({});
//             res.status(200).json(products);
    
    
//          }catch(error){
//              res.status(500).json({message: error.message})
    
//         }


// }

// // gettingSingleProduct

// export const  getProduct=async(req,res)=>{

//   try{

//     const {id} =req.params;
//     const product = await Product.findById(id)
//     res.status(200).json(product)


// }catch(error){
//     console.log({message:error});

// }

// }

// export const updateProduct=async(req,res)=>{

//   try{
      
       
//     const {id}=req.params;
    
//    const product= await Product.findByIdAndUpdate(id,req.body);

// if(!product){
//   return  res.status(404).json({"message":"error found"})

// }

// const updatedProduct =await findById(id);
// res.status(200).json(updatedProduct);
// console.log("updated sucessfully");


// }
// catch(err){
//     res.status(500).json({"message":err})
// }


  
// }



// export const deleteProduct=async(req,res)=>{
//   try{
      
       
//     const {id}=req.params;
    
//    const product= await Product.findByIdAndUpdate(id,req.body);

// if(!product){
//   return  res.status(404).json({"message":"error found"})

// }

// const updatedProduct =await findById(id);
// res.status(200).json(updatedProduct);
// console.log("updated sucessfully");


// }
// catch(err){
//     res.status(500).json({"message":err})
// }


// }


