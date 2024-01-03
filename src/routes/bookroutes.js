import { Router } from "express";
import {
  getBooksController,
  getBooksByIdController,
  addBooksController,
} from "../controllers/bookcontroller.js";
const book = Router();

book.get("/", getBooksController);
book.post("/", addBooksController);
book.get("/:id", getBooksByIdController);

export default book;
