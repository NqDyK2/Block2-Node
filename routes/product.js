import { Router } from "express";
import {list, create, remove, update,readOne, search, paginate, sort, filCate } from "../controllers/product";
import {checkAuth , isAdmin ,isAuth, requireSignin} from "../middlewares/checkAuth"
import {userById} from "../controllers/user"
const router = Router();



router.get('/product', checkAuth, paginate);
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, readOne);
router.post('/products/:userId', requireSignin, isAuth, isAdmin,create);
// router.post('/product',create);
router.delete('/product/:userId/:id', requireSignin, isAuth, isAdmin, remove);
router.patch("/product/:userId/:id", requireSignin, isAuth, isAdmin, update );
router.get("/search", search );
// router.get("/products",paginate);
router.get("/rentals", sort);

router.get("/products", filCate)
    
router.param("userId", userById);

export default router;