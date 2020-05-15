const index = (req, res) => {
  res.render("index", { title: "Akaris Travels " });
};

module.exports = {
  index,
};
