export const getBooksQuery = "SELECT * FROM book;";
export const getBooksByIdQuery = "SELECT * FROM book WHERE id = $1;";
export const addBooksQuery =
  "INSERT INTO book (title, author, release_date) VALUES ($1, $2, $3);";
