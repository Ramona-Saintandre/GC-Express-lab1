// require the Express module
const express = require("express");
const express = require("cart-items");

// creates an instance of an Express server this is referencing the const express
const app = express();

// define the port
const port = 8080;

//convert to json
app.use (express.json());

// request 

app.use('/', __dirname,cart-items);

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
console.log('Listening at http://localhost:8080/cart-items...');

