export const creat = async (req, res)=> {
    try{
        const user = await new User(req.body).save();
        res.json(user)
    }catch(error){
        res.status(400).json({
            message:"Can't registed"
        })
    }
}
export const creat = async (req, res)=> {
    try{
        const user = await new User(req.body).save();
        res.json(user)
    }catch(error){
        res.status(400).json({
            message:"Can't registed"
        })
    }
}