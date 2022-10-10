const { Router } = require("express");

const student = Router();

student.post("/create", (req, res) => {
  res.send("Created a new student");
});

student.put("/update", (req, res) => {
  res.send("Updated a student");
})

student.get("/get", (req, res) => {
  res.send("Get all students");
})

student.delete("/delete", (req, res) => {
  res.send("Deleted a student");
})

module.exports = student;