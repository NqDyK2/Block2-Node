import User from "../models/user";
export const registed = async (req, res)=> {
    try{
        const user = await new User(req.body).save();
        res.json(user)
    }catch(error){
        res.status(400).json({
            message:"Can't registed"
        })
    }
}
export const signin = async (req, res) => {
    const filter = {email: req.body.email , password: req.body.password}
    try {
        const user = await User.findOne(filter)
        res.json(user)
    } catch (error) {
        res.status(400).json({error})
    }
}