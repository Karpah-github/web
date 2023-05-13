import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface UserAttr {
    name: string;
    email: string;
    phone_number: string;
    country: string;
    address_id: any;

}

const customerSchema = new Schema<UserAttr>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    address_id:{
        type: Schema.Types.ObjectId
    },
})

const Customer = model('Customer', customerSchema);
export { Customer }