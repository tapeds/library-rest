import express from "express";
import bookRoutes from "./src/routes/bookroutes.js";
import pool from "./db.js";

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

pool.connect((err) => {
  if (err) console.log(err.message);
  else console.log("Connected to database");
});

app.get("/", (req, res) => res.send("Book API is running!"));

app.use("/books", bookRoutes);
