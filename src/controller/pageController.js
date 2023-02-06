const home = (req, res) => {
  res.send("tudo certo");
};
const dogs = (req, res) => {
  res.send("dogs");
};
const cats = (req, res) => {
  res.send("cats");
};
const fishes = (req, res) => {
  res.send("fishes");
};

module.exports = { home, dogs, cats, fishes };
