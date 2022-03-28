import mongoose,{Schema} from "mongoose";
// import { v4 as uuid4 } from 'uuid';
import { createHmac } from "crypto";

const userSchema  = new Schema ({
    email: {
        type: String, 
        required: true, 
        },
    name: {
        type: String,
        required: true,
        default: '',
        maxlength:30
    },
    password: {
        type: String,
        minlength: 6,
        required:true
    },
    salt: {
        type: String,
    },
    role: {
        type: Number,
        default: 0
    }
},{timestamps: true})


userSchema.methods = {
    authenticate(password){
        return  this.password == this.encryptPassword(password) 
    },
    encryptPassword(password){
        if(!password) return;
        try {
            return createHmac('sha256',"ABCDFE").update(password).digest('hex');      
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre('save', function(next){
        // this.salt = uuid4();
        // console.log( this.encryptPassword(this.password))
        this.password = this.encryptPassword(this.password);
        next();
})



export default mongoose.model('User', userSchema)