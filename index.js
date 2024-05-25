let mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://anvesh:1130@cluster0.eb87jva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to the database");
  } catch (err) {
    console.error(err);
    console.log("Error connecting to the database");
  }
}

dbConnect();
