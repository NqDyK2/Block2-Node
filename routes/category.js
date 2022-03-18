import { Router } from 'express';
import { create, list, read, remove, update } from '../controllers/category';
const router = Router();


router.post("/category", create);
router.get("/category/:id", read);
router.get("/categories", list);
router.delete("/category", remove)
router.patch("/category/:id", update)
export default router;