const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb+srv://sagarsam606:9Yel38wclJhSwywo@laceup.u8oxc8p.mongodb.net/caps", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error", error);
  }
};

module.exports = dbConnect;



