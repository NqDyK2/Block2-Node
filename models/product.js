import mongoose, {Schema, ObjectId} from "mongoose";

const productSchema = new Schema({
    name :{
        type: String,
        minlength: 7,
        index: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    keyword: {
        type: String,
        required:true,
    }
}, {timestamps: true});
 productSchema.index({'$**': 'text'});
export default mongoose.model('Product', productSchema);