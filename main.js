import cars from "./data/carsData.json" with { type: "json" };
import books from "./data/booksData.json" with { type: "json" };
import users from "./data/usersData.json" with { type: "json" };
import express from "express";

const app = express();

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.get("/users", (req, res) => {
  res.json(users);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
