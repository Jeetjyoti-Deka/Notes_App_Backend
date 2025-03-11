const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGODB_URI || "your-default-mongodb-uri";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
