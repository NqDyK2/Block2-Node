import req from "express/lib/request";
import mongoose from "mongoose";

const Post = mongoose.model('Post', { title: String, desc: String, img: String})

export const create = async(req, res) => {
    try{
        const post = await new Post(req.body).save();
        res.json(post)
    }catch(error){
        res.status(400).json({
            messsage: "Can't add more Post."
        })
    }
}
export const list = async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(error){
        res.status(400).json({
            messsage: "Can't find list posts"
        })
    }
}
export const remove = async (req,  res) => {
    try{
        const post = await Post.findOneAndDelete({_id: req.params.id});
        res.json(post)
    }catch(error){
        res.status(400).json({
            message:"Can't remove post"
        })
    }
}
export const readOne = async (req, res) => {
    try{
        const post = await Post.findOne({_id: req.params.id});
        res.json(post)
    }catch(error){
        res.status(400).json({
            message:"Can't find this ID"
        })
    }
}
export const update = async (req, res) => {
    try{
        const post = await Post.findOneAndUpdate({_id: req.params.id}, req.body, { new: true} );
        res.json(post)
    }catch(error){
        res.status(400).json({
            message:"Can't update this post"
        })
    }
}