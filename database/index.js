const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectString = process.env.CONNECTSTRING;

async function connectDatabase() {
  try {
    await mongoose.connect(connectString);
    console.log("DB connected");
  } catch (error) {
    console.log("err", error);
  }
}

module.exports = connectDatabase;
