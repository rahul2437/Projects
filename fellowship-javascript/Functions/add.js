const fs = require("fs");
const args = process.argv;

module.exports = function add() {
  const priority = args[3];
  const newTask = args[4];

  if (newTask) {
    let data = [];
    const fileData = fs
      .readFileSync('todo.txt')
      .toString();
    fs.writeFile('todo.txt', newTask + priority + '\n' + fileData, (err) => {
      if (err) throw err;
      console.log(`Added task: "${newTask}" with priority ${priority}`);
    });
  } else {
    console.log('Error: Missing todo string. Nothing added!');
  }
}