// config/db.js
const mongoose = require('mongoose');

function connectToDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to the database successfully!");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message || err);
      process.exit(1);  // Exit the process if the DB connection fails
    });
}

module.exports = connectToDB;
