const fs = require("fs");
const add = require("./Functions/add");
const help = require("./Functions/help");
const del = require("./Functions/delete");
const done = require("./Functions/done");
const list = require("./Functions/list");
const report = require("./Functions/report");

const args = process.argv;

const currentDir = args[1].slice(0, -8);

if (fs.existsSync(currentDir + 'todo.txt') === false) {
  let createStream = fs.createWriteStream('todo.txt');
  createStream.end();
}
if (fs.existsSync(currentDir + 'done.txt') === false) {
  let createStream = fs.createWriteStream('done.txt');
  createStream.end();
}


const data = {
  tasks: []
};

const usage = `Usage :-
$ ./task add 2 hello world    # Add a new item with priority 2 and text "hello world" to the list
$ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order
$ ./task del INDEX            # Delete the incomplete item with the given index
$ ./task done INDEX           # Mark the incomplete item with the given index as complete
$ ./task help                 # Show usage
$ ./task report               # Statistics`;

switch (args[2]) {
  case "help": {
    help();
    break;
  }
  case "add": {
    add();
    break;
  }
  case "del": {
    del();
    break;
  }
  case "done": {
    done();
    break;
  }
  case "ls": {
    list();
    break;
  }
  case "report": {
    report();
    break;
  }
  default: {
    help();
  }
}