import User from "../models/user";
import jwt from "jsonwebtoken";
export const registed = async (req, res)=> {
    const { email ,name, password  } = req.body
    try{
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email đã tồn tại"
            })
        }
        const user = await new User({email ,name, password}).save();
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name
        })
    }catch(error){
        res.status(400).json({
            message:"Can't registed"
        })
    }
}
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({_id: user._id }, "123456", { expiresIn: 60 * 60})

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        
    }
}