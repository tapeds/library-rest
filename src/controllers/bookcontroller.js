import pool from "../../db.js";
import { getBooksQuery, getBooksByIdQuery } from "../queries/bookqueries.js";

export const getBooks = (req, res) => {
  pool.query(getBooksQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getBooksById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getBooksByIdQuery, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
