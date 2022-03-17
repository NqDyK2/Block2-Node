import { Router } from "express";
import { creat } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.post('/user', checkAuth, creat);

export default router;