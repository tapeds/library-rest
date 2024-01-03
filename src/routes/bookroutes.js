import { Router } from "express";
import { getBooks, getBooksById } from "../controllers/bookcontroller.js";
const router = Router();

router.get("/", getBooks);

router.get("/:id", getBooksById);

export default router;
