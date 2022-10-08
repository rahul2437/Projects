const { sum, sub, mul, div } = require("./math");
const path = require("path");

let a = 10;
let b = 200;

console.log(sum(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));

console.log(process.cwd());
console.log(path.join(process.cwd(), "..", "assets"));
