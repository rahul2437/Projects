let args = process.argv;
console.log(args);

let r = 0;
for (let i = 2; i < args.length; i++) {
  r += Number(args[i]);
}

console.log(r);