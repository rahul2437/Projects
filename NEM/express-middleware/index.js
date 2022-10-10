const express = require("express");
const app = express();


//Teachers
app.post("/teachers/create", (req, res) => {
  res.send("Created a new teacher");
});

app.put("/teachers/update", (req, res) => {
  res.send("Updated a teacher");
})

app.get("/teachers/get", (req, res) => {
  res.send("Get all teachers");
})

app.delete("/teachers/delete", (req, res) => {
  res.send("Deleted a teacher");
})

//Students
app.post("/students/create", (req, res) => {
  res.send("Created a new student");
});

app.put("/students/update", (req, res) => {
  res.send("Updated a student");
})

app.get("/students/get", (req, res) => {
  res.send("Get all students");
})

app.delete("/students/delete", (req, res) => {
  res.send("Deleted a student");
})

app.listen(8000);