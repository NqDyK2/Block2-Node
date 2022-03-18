import Category from '../models/category';
import Product from '../models/product';

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async ( req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        res.status(400).json({error})
    }
} 
export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const remove = async (req, res) => {
    try {
        const condition = {_id: req.params.id}
        const category = await Category.findByIdAndDelete(condition).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const update = async (req, res) => {
    try {
        const condition = {_id: req.params.id};
        const doc = req.body;
        const option = {new: true};
        const category = await Category.findByIdAndUpdate(condition, doc, option)
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}