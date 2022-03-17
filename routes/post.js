import { Router } from "express";
import { list , create, remove, update, readOne} from "../controllers/post"
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get('/posts',checkAuth, list);
router.get('/post/:id', checkAuth, readOne);
router.post('/post', checkAuth, create);
router.patch('/post/:id',checkAuth, update);
router.delete('/post/:id', checkAuth, remove);
export default router