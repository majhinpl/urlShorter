const express = require("express");
const app = express();
const PORT = 8001;
// require("dotenv").config();
const connectToDatabase = require("./database");
const urlRoute = require("./routes/urlRoute");
const URL = require("./model/urlModel");

app.use(express.json());

connectToDatabase();

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
