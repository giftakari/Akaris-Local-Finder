//GET HOME PAGE

const homelist = (req, res) => {
  res.render("locations-list", { title: "Home" });
  //console.log("ok ma ");
};

//GET Location info
const locationInfo = (req, res) => {
  res.render("location-info", { title: "Location Info" });
  // console.log("confirmed");
};

//Get Add Review page
const addReview = (req, res) => {
  res.render("index", { title: "Add review" });
  console.log("add Review");
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
};
