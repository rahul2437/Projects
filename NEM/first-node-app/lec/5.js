const fs = require("fs");
let db = require("./db.json");

db.posts.push({ id: 1, message: "New Post 1" });
for (let i = 2; i < 6; i++) {
  db.posts.push({ id: i, message: "New Post " + i });
}
fs.writeFileSync("./db.json", JSON.stringify(db), {
  encoding: "utf-8"
})