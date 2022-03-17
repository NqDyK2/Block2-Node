import mongoose,{Schema} from "mongoose";

const productSchema = new Schema ({
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength:7,
    },
    password: {
        type: String,
        minlength: 8,
        required:true
    },
    registeredAt: { type: Date, index: true }
})
export default mongoose.model('user', productSchema)