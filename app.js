const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/", require("./router"));

app.use(express.static(__dirname + "/public"));

app.listen(1337, () => {
  console.log("Server corriendo en http://localhost:1337");
});
