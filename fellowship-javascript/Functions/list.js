module.exports = function list() {
  let data = [];
  const fileData = fs.readFileSync(
    currentWorkingDirectory + 'todo.txt')
    .toString();
  data = fileData.split('\n');
  let filterData = data.filter(function (value) {
    return value !== '';
  });
  if (filterData.length === 0) {
    console.log('There are no pending todos!');
  }
  for (let i = 0; i < filterData.length; i++) {
    console.log((filterData.length - i) + '. '
      + filterData[i]);
  }
}