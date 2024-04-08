import mongoose from 'mongoose'

const ProductScheme =mongoose.Schema({
    name:{
        type:String,
        require:[true]
    },
    quantity:{
        type:Number,
        require:[true],
        default:0
    },
    price:{
        type:Number,
        require:[true],
        default:0
    },
    image:{
        type:String,
        require:[false],
        default:0
    },
    
    timespans: {
        type: [Date], // Example: Array of Date objects
        required: true
    }
  

    
})

const Product =mongoose.model("Product",ProductScheme)

export default Product;
