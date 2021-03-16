const dogs = require("../../../dogs.json");

export default (req, res) => {
  res.status(200).json(dogs);
};
