const express = require("express");
const router = express.Router();
//const ctrMain = require("../controllers/others");
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");

/* GET home page. */
/* const homepageController = (req, res) => {
  res.render("index", { title: "Akaris Travels " });
}; */

//router.get("/", ctrMain.index);

//Main Routes
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);

//Other Routes
router.get("/about", ctrlOthers.about);

module.exports = router;
