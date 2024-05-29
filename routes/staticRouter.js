const express = require("express");
const URL = require("../model/urlModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});
router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
