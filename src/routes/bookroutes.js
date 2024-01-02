import { Router } from "express";
import { getBooks } from "../controllers/bookcontroller.js";
const router = Router();

router.get("/", getBooks);

export default router;
