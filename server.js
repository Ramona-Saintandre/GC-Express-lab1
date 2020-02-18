// require the Express module
const express = require("express");
// creates an instance of an Express server
const app = express();
// define the port
const port = 3000;
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));