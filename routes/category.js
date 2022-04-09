import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/category';
import {checkAuth , isAdmin ,isAuth, requireSignin} from "../middlewares/checkAuth"
import {userById} from "../controllers/user"
const router = Router();


router.post("/category/:userId", requireSignin, isAuth, isAdmin,create);
router.get("/category/:id", read);
router.get("/categories", list);
router.delete("/category/:userId/:id", requireSignin , isAuth, isAdmin ,remove)
router.patch("/category/:userId/:id",requireSignin, isAuth, isAdmin, update)


router.param("userId", userById);

export default router;