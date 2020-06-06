const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

let users = require('./users/routes');
let products = require('./products/routes');
let categories = require('./categories/routes');
let auth = require('./auth/routes');
let likes = require('./likes/routes');

users(app);
products(app);
categories(app);
auth(app);
likes(app);

app.listen(port, () => {
  console.log(`Server started (http://localhost:${port}/) !`);
});
