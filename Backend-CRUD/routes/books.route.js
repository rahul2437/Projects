const express = require("express");
const { record } = require("../middlewares/record.middleware");
const { validator } = require("../middlewares/validator.middleware");
const { Book } = require("../models/book.model");
const bookRouter = express.Router();

bookRouter.get("/", async (req, res) => {
  const { price_low, price_high, genre, title, author, startsWith } = req.query;
  const filter = {};
  if (price_low && price_high) {
    filter.price = { $gte: +price_low, $lte: +price_high };
    // filter.$and = [{ price: { $gt: queries.price_low } }, { price: { $lt: queries.price_high } }]
  }
  if (genre) {
    filter.genre = { $regex: new RegExp(genre, "i") };
  }
  if (title) {
    filter.title = { $regex: new RegExp(title, "i") };
  }
  if (author) {
    filter.author = { $regex: new RegExp(author, "i") };
  }
  if (startsWith) {
    filter.title = { $regex: new RegExp("^" + startsWith, "i") };
  }
  let data = await Book.find(filter);
  res.send(data.length > 0 ? data : "No Book Found");
});

bookRouter.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await Book.find({ _id: id });
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
})

bookRouter.post("/addBook", validator, async (req, res) => {
  const payload = req.body;
  try {
    let data = await Book.find({ title: payload.title });
    if (data) {
      res.send("Book already exists");
    } else {
      const book = new Book(payload);
      await book.save();
      res.send("Book Added Successfully");
    }
    console.log("Book Found");
  } catch (error) {
    console.log({
      "err": "All the fields are not there"
    });
    res.send(error.message);
  }
});

bookRouter.delete("/:id", record, async (req, res) => {
  let _id = req.params.id;
  try {
    let data = await Book.deleteOne({ _id });
    res.send(`Book with id:${_id} Deleted`);
  } catch (error) {
    res.send(error);
  }
})

bookRouter.put("/:id", record, async (req, res) => {
  let _id = req.params.id;
  let payload = req.body;
  try {
    let data = await Book.findByIdAndUpdate(_id, payload);
    res.send(`Book with id:${_id} Updated`);
  } catch (error) {
    res.send(error);
  }
})
bookRouter.patch("/:id", record, async (req, res) => {
  let _id = req.params.id;
  let payload = req.body;
  try {
    let data = await Book.findByIdAndUpdate(_id, payload);
    res.send(`Book with id:${_id} Updated`);
  } catch (error) {
    res.send(error);
  }
})

module.exports = { bookRouter };