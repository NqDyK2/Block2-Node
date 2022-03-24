import { Router } from "express";
import { registed, signin } from "../controllers/auth";
// import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.post('/registed', registed);
router.post('/login' ,signin)

export default router;