const os = require("os");
console.log(os.cpus().length);
console.log(os.version());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());

const timeFormatter = require("seconds-time-formatter");

console.log(
  timeFormatter.timeConvert({
    seconds: os.uptime(),
    format: "json"
  }
  ));