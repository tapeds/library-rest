import { Router } from "express";
import {
  getBooksController,
  getBooksByIdController,
  addBooksController,
  deleteBookController,
} from "../controllers/bookcontroller.js";
const book = Router();

book.get("/", getBooksController);
book.post("/", addBooksController);
book.get("/:id", getBooksByIdController);
book.delete("/:id", deleteBookController);

export default book;
