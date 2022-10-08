const fs = require("fs");


//Read file
//Not waiting -- Non Blocking
console.log("Before");
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("After");

//Wait for printing line
console.log("Before-1");
let data = fs.readFileSync("./sample.txt", "utf-8");
console.log("data-1", data);
console.log("After-1");