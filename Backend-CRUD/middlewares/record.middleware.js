const fs = require("fs");

const record = (req, res, next) => {
  const { method, body } = req;
  if (method === "DELETE") {
    fs.appendFileSync("records.txt", `The document with id:${req.params.id} has been deleted.\n`);
  }
  if (method === "PUT" || method === "PATCH") {
    fs.appendFileSync("records.txt", `The document with id:${req.params.id} has been updated.\n`);
  }
  next();
}

module.exports = { record };