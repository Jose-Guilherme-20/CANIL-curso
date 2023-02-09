const Pet = require("../models/pet");
const createMenu = require("../helpers/createMenuObject");

const search = (req, res) => {
  let query = req.query.q;
  console.log(query);

  let list = Pet.getFromName(query);

  res.render("page/home", {
    menu: createMenu(""),
    list,
    query,
  });
};
module.exports = { search };
