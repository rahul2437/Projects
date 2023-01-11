const validator = (req, res, next) => {
  let { title, genre, price, author } = req.body;
  if (!title || !genre || !price || !author) {
    res.send({
      "err": "All the fields are not there"
    });
  }
  if (!typeof title === String || !typeof genre === String || !typeof price === Number || !typeof author === String) {
    res.send({
      "err": "Incorrect Data type"
    });
  }
  next();
}

module.exports = { validator };