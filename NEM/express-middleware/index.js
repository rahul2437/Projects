const express = require("express");
const teacherRoutes = require("./routes/teachers.route");
const studentRoutes = require("./routes/students.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request", req.query);
  if (!req.query.api) return res.status(401).send("No API key Provided");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome Starboy");
});

app.use("/teachers", teacherRoutes);
app.use("/students", studentRoutes);

app.listen(8000);
