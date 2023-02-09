const createMenu = require("../helpers/createMenuObject");
const Pet = require("../models/pet");

const home = (req, res) => {
  let list = Pet.getAll();

  res.render("page/home", {
    menu: createMenu("all"),
    banner: {
      title: "todos os animais",
      backgroud: "allanimals.jpg",
    },
    list,
  });
};
const dogs = (req, res) => {
  const list = Pet.getFromType("dog");
  res.render("page/home", {
    menu: createMenu("dog"),
    banner: {
      title: "cachorros",
      backgroud: "banner_dog.jpg",
    },
    list,
  });
};
const cats = (req, res) => {
  const list = Pet.getFromType("cat");
  res.render("page/home", {
    menu: createMenu("cat"),
    banner: {
      title: "gatos",
      backgroud: "banner_cat.jpg",
    },
    list,
  });
};
const fishes = (req, res) => {
  const list = Pet.getFromType("fish");
  res.render("page/home", {
    menu: createMenu("fish"),
    banner: {
      title: "peixes",
      backgroud: "banner_fish.jpg",
    },
    list,
  });
};

module.exports = { home, dogs, cats, fishes };
