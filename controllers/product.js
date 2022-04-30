import Product from "../models/product";
// API thêm sản phẩm
export const create = async (req, res) => {
    console.log(req.body);
    try {
        console.log(1);
        const product = await Product(req.body).save();
        console.log(product);
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
        const products = await Product.find().sort({createAt: -1});
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
            export const search = async (req,res) => {
                try {
                    const title = req.query.q;
                    const searchString = title ? title : ""
                    const result = await Product.find({$text: {$search: searchString}});
                    res.json(result)
                } catch (error) {
                    res.status(400).json(error)
                }
            }

export const paginate = async (req,res) =>{
    try {
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await Product.countDocuments({})
        const product = await Product.find({})
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * page);
        res.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            product
        })
    } catch (error) {
      res.json(error)  
    }
}
export const sort = async (req,res) => {
    try {
        const products = await Product.find({}).sort(req.query.sort).exec(function (err, listings) {
            if (err) {
                console.log(err);
            } else {
                res.render('rentals', { listings: listings })
            }
        })
        // res.json(products)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const filCate = async (req,res) => {
    try {
        const products = await Product.find().populate({path : 'Category', match: { _id:req.params.id },})
        res(products)
    } catch (error) {
        res.status(400).json(error)
    }
}



// export const  paginate = async (req,res) => {
//     try {
//         const { pageSize = 8 , pageIndex = 1} = req.query
//         const startIndex = req.query.pageIndex -1 * req.query.pageSize
//         const endIndex = req.query.pageIndex * req.query.pageSize
//         const product = await Product.find().limit()
//     } catch (error) {
        
//     }
//     try {
//         const { page = 1, limit = 10} = req.query;
//         const products = await Product.find().limit(limit+1).skip(( page - 1 ) * limit );
//         res.status(200).json({total: products.length, products});
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const read = (req, res) => {
//     res.json( products.find(item => item.id === +req.params.id));
// }

// export const remove = (req, res) => {
//     res.json(products.filter(item => item.id !== +req.params.id));
// }
// export const update = (req, res) => {
//     res.json(products.map(item => item.id == req.params.id ? req.body : item));
// }  
