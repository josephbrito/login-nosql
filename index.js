const express = require("express");
const app = express();
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect("mongodb://localhost/melogin");

let db = mongoose.connection;

db.on("error", () => console.log("Houve um erro no banco de dados"));
db.once("open", () => console.log("Database running"));

app.use("/user", express.static(path.join(__dirname, "views")));
app.use("/user", express.json(), routes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3050, () => console.log("Server rodando na porta", 3050));
