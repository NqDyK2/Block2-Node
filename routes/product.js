import { Router } from "express";
import {list, create, remove, update,readOne } from "../controllers/product";
import {checkAuth , isAdmin ,isAuth, requireSignin} from "../middlewares/checkAuth"
const router = Router();



router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, readOne);
router.post('/products/:userId', requireSignin, isAuth, isAdmin,create);
router.delete('/product/:id', checkAuth, remove);
router.patch("/product/:id", checkAuth, update )
export default router;