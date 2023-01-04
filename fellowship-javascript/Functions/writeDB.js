const writeTasks = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data))
};