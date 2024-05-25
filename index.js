const express = require("express");
const app = express();
const PORT = 8001;
// require("dotenv").config();
const connectToDatabase = require("./database/dbConfig");

const urlRoute = require("./routes/urlRoute");

// connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server listing at port ${PORT}`);
});
