const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  //Handler
  res.write("Hello");
  res.write(" ");
  res.write("Rahul");
  res.write(" ");
  // res.end("!");

  if (req.url === "/") return res.end("Welcome to homepage");
  if (req.url === "/products") {
    // res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify([1, 2, 3, 4]));
  }
});

server.listen(PORT, () => {
  console.log("server started on localhost:" + PORT + "/");
});