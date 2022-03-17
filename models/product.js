import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name :{
        type: String,
        minlength: 7,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true});
export default mongoose.model('Product', productSchema);