import mongoose, {Schema, ObjectId} from "mongoose";

const productSchema = new Schema({
    name :{
        type: String,
        minlength: 7,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, {timestamps: true});
export default mongoose.model('Product', productSchema);