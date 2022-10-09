const express = require('express');
const app = express();

const users = [
  {
    id: 1,
    name: 'John Doe',
  }, {
    id: 2,
    name: 'Jane Doe',
  }, {
    id: 3,
    name: 'Joe Doe',
  }, {
    id: 4,
    name: 'Mike Doe',
  }
]

app.get('/', (req, res) => {
  res.json(users);
})

app.listen(8000, () => {
  console.log("Server listening on http://localhost:8000");
})