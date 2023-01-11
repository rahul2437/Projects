const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { bookRouter } = require("./routes/books.route");

const app = express();
app.use(express.json());

app.use("/books", bookRouter);


app.use("/", (req, res) => {
  res.send("Welcome to Evaluations 3");
});


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server Connnected");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
})