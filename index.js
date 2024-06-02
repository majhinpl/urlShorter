const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookies-parser");

const PORT = 8001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const connectToDatabase = require("./database");
connectToDatabase();

const URL = require("./model/urlModel");
const urlRoute = require("./routes/urlRoute");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/userRoute");
const { restrictToLoggedinUserOnly } = require("./middleware/auth");

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
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
