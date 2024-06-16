import mongoose from 'mongoose'

const CustomerScheme =mongoose.Schema({
     id:{
         type:Number,
            require:[true],
            default:1,
            unique:true,
     },
   
    full_name:{
        type:String,
        require:[true]
    },
    Address:{
        type: mongoose.Schema.Types.Mixed,
        required:[true],
        default:0
    },
    Phone:{
        type: Number,
        required:[true],
        default:0
    },
    email:{
        type:String,
       
    },
    
    timespans: {
        type: [Date], // Example: Array of Date objects
        required: true
    }
  

    
})

const Customer =mongoose.model("Customer",CustomerScheme)

export default Customer;
