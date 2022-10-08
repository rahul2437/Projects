const { response } = require('express');
const express = require('express');

const navbar = () => {
  return `<div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <button>Home</button>
            </a>
          </li>
          <li>
            <a href="/products">
              <button>Product</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>`;
};

const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(navbar());
});
app.get("/products", (req, res) => {
  res.send(navbar());
});