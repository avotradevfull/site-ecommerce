const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000, // Temps d'attente avant de déclarer l'échec de connexion
  })
  .then(() => console.log("MongoDB connection successful..."))
  .catch((error) => console.log("MongoDB connection failed", error.message));

