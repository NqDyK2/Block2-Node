import { Router } from "express";
import { registed, signin } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.post('/registed', checkAuth, registed);
router.get('/login', checkAuth ,signin)

export default router;