const dogs = require("../../../../dogs.json");

export default (req, res) => {
  const breed = req.query.breed;

  // double equals because any query value will be a string and our ids are integers
  const target = dogs.find(
    (dog) => dog.breed.toLowerCase() == breed.toLowerCase()
  );

  if (!target) {
    res.status(400).json({ error: "no dog found" });
    return;
  }

  res.status(200).json(target);
};
