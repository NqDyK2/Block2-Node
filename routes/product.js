import { Router } from "express";
import {checkAuth} from "../middlewares/checkAuth"
const router = Router();

// const check = (req, res, next ) => {
//     const status = true;
//     if(status){
//         next();
//     }else{
//         console.log("Nothing");
//     }
// }



// fake data
const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"}
];

router.get('/products', checkAuth, (req, res) => {
    res.json(products);
});
router.get('/product/:id', checkAuth, (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
});
router.post('/products', checkAuth, (req, res) => {
    products.push(req.body);
    res.json(products);
});
router.delete('/product/:id', checkAuth, (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
});
export default router;