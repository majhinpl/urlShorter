const mongoose = require("mongoose");

const connectString =
  "mongodb+srv://urlShortner:shorturlpw@userscluster.hajiboq.mongodb.net/?retryWrites=true&w=majority&appName=usersCluster";

// async function connectToDatabase() {
//   await mongoose.connect(connectString);
//   console.log("DB connected");
// }

mongoose
  .connect(connectString, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));
