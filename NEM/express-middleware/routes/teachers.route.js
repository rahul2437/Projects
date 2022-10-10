const { Router } = require("express");

const teacher = Router();

teacher.post("/create", (req, res) => {
  res.send("Created a new teacher");
});

teacher.put("/update", (req, res) => {
  res.send("Updated a teacher");
})

teacher.get("/get", (req, res) => {
  res.send("Get all teachers");
})

teacher.delete("/delete", (req, res) => {
  res.send("Deleted a teacher");
})

module.exports = teacher;