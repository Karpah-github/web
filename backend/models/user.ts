import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface UserAttr {
    name: string;
    email: string;
    phone: string;
    country: string;
    role: string;
    address_id: any;

}

const userSchema = new Schema<UserAttr>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        countryCode: {type: String, required: true },
        phoneNumber: {type: String, required: true}

    },
    role:{
        type: String, 
        required: true, 
        default: 'user',
        enum: ["user", "shop-admin", "shop-owner"]
    },
    country:{
        type: String,
        required: true
    },
    address_id:{
        type: Schema.Types.ObjectId
    },
})

const User = model('User', userSchema);
export { User }