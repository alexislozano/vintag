const express = require("express");
const app = express();
const port = 3000;

let users = require('./users/routes');
let products = require('./products/routes');
let categories = require('./categories/routes');
let auth = require('./auth/routes');

users(app);
products(app);
categories(app);
auth(app);

app.listen(port, () => {
  console.log(`Server started (http://localhost:${port}/) !`);
});
