import mongoose,{Schema} from "mongoose";
import { creatHcma } from "crypto-js"
const productSchema = new Schema ({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    name: {
        type: String,
        required: true,
        default: ''
    },
    hash_password: {
        type: String,
        minlength: 8,
        required:true
    },
    salt: {
        type:String
    },
},
{timestamps: true}

)
export default mongoose.model('User', productSchema)