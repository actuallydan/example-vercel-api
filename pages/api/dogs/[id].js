const dogs = require("../../../dogs.json");

export default (req, res) => {
  const id = req.query.id;

  // double equals because any query value will be a string and our ids are integers
  const target = dogs.find((dog) => dog.id == id);

  if (!target) {
    res.status(400).json({ error: "no dog found" });
    return;
  }

  res.status(200).json(target);
};
