const about = (req, res) => {
  res.render("index", { title: " About Akaris Travels " });
};

module.exports = {
  about,
};
