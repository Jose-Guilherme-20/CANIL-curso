const express = require("express");
const dotenv = require("dotenv");
const mustache = require("mustache-express");
const path = require("path");
const mainRouter = require("./routes/index");

dotenv.config();
const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);

app.use((req, res) => {
  res.status(404).send("pagina não encontrada");
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
