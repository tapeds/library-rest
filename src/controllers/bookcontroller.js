import pool from "../../db.js";
import queries from "../queries/bookqueries.js";

export const getBooks = (req, res) => {
  pool.query(queries, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
