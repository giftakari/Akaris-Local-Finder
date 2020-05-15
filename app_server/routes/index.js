var express = require("express");
var router = express.Router();
const ctrMain = require("../controllers/main");

/* GET home page. */
/* const homepageController = (req, res) => {
  res.render("index", { title: "Akaris Travels " });
}; */

router.get("/", ctrMain.index);

module.exports = router;
