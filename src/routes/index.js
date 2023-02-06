const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

module.exports = router;
