// fake data
// const products = [
//     {id: 1, name: "Product A"},
//     {id: 2, name: "Product B"},
//     {id: 3, name: "Product C"},
//     {id: 4, name: "Product D"},
//     {id: 5, name: "Product E"}
// ];
import req from "express/lib/request";
import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String });

// API thêm sản phẩm
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Can't add more products."
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
export const remove = async (req,  res) => {
    try{
        const product = await Product.findOneAndDelete({_id: req.params.id});
        res.json(product)
    }catch(error){
        res.status(400).json({
            message:"Can't remove product"
        })
    }
}
export const readOne = async (req, res) => {
    try{
        const product = await Product.findOne({_id: req.params.id});
        res.json(product)
    }catch(error){
        res.status(400).json({
            message:"Can't find this ID"
        })
    }
}
export const update = async (req, res) => {
    try{
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true} );
        res.json(product)
    }catch(error){
        res.status(400).json({
            message:"Can't update this product"
        })
    }
}
// export const read = (req, res) => {
//     res.json( products.find(item => item.id === +req.params.id));
// }

// export const remove = (req, res) => {
//     res.json(products.filter(item => item.id !== +req.params.id));
// }
// export const update = (req, res) => {
//     res.json(products.map(item => item.id == req.params.id ? req.body : item));
// }   