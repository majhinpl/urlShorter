const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = 8001;
app.use(express.json());

const connectToDatabase = require("./database");
connectToDatabase();
const URL = require("./model/urlModel");
const urlRoute = require("./routes/urlRoute");

app.use("/url", urlRoute);
app.use("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server listing at port ${PORT}`);
});
