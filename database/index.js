const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://urlShortner:p%40ssw0rd%279%27%21@userscluster.hajiboq.mongodb.net/?retryWrites=true&w=majority&appName=usersCluster";

async function connectDatabase() {
  try {
    await mongoose.connect(connectString);
    console.log("DB connected");
  } catch (error) {
    console.log("err", error);
  }
}

module.exports = connectDatabase;
