import { Schema, model } from "mongoose";

interface productAttr {

}

const productSchema = new Schema({
    title:{
        type: String,
        required: true,
        maxlength: [40, "Product title must be less than 40 characters"]
    },
    slug: String,
    price: {type: Number, required: true},
    type: {
        type: String,
        enum: ['ready-made', 'custom-made'],
        default: 'ready-made'
    },
    duration:{
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    averageRatings:{
        type: Number,
        min: [1, "Ratings must be more than 1"]
    },
    numRatings:{
        type: Number,
        default: 0
    },
    discountPrice:{
        type: Number, 
        validate:{
            validator: function(val){
                return val < this.price
            },
            message: "Discount price {{VALUE}} show be less than regular price"
        },
    },
    coverPhoto: String,
    images:[String],
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    }
})

const Product = model('Product', productSchema)
export { Product }