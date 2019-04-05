require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const bodyParser = require("body-parser");
const controller = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/product", controller.addProduct);
app.get("/api/product", controller.getProduct);


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
