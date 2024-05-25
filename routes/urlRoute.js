const express = require("express");
const { handleGenerateNewShortURL } = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);

module.exports = router;
