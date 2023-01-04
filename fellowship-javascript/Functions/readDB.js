const readTasks = () => {
  return JSON.parse(fs.readFileSync("db.json"));
};