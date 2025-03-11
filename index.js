const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const noteRoutes = require("./router/noteRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// connect to db
connectDB().then(() => startServer()); // start the server only if database is connected
// basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// API routes
app.use("/api", noteRoutes);

// Start the server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
