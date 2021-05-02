// referenced mini project from week 17

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./controllers");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness_tracker_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// This is going to start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






  