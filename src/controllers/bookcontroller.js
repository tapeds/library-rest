import pool from "../../db.js";
import {
  getBooksQuery,
  getBooksByIdQuery,
  addBooksQuery,
} from "../queries/bookqueries.js";

export const getBooksController = (req, res) => {
  pool.query(getBooksQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getBooksByIdController = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getBooksByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const addBooksController = (req, res) => {
  const { title, author, release_date } = req.body;

  pool.query(addBooksQuery, [title, author, release_date], (error, results) => {
    if (error) throw error;
    res.status(200).json("Book added successfully!");
  });
};
