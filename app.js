// imported express to create express app to handle api reqs and work with responses
const express = require("express");
// imported mongoose to connect to db
const mongoose = require("mongoose");
//importing  route file for workout routes
const WorkoutRoutes = require("./routes/workout");
//instance of express app is created
const app = express();
// middleware to parse incoming reqs body in json format

app.use(express.json());

//middleware to run before every request
app.use((req, res, next) => {
  console.log(req.method,req.path);
  next();
});
// routing for workout related reqs
app.use("/api/workouts", WorkoutRoutes);

// routes
app.get("/", (req, res) => {
  res.json({ mes: "hello" });
});

// mongoose connect to connect to db
mongoose
  .connect(
    "mongodb+srv://workout:workoutcrud@cluster-workout.tcn8y6x.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to db")
    // listens for request
    app.listen(8000, () => {
      console.log("listening on 8000");
    });
  }).catch((error) => {
    console.log(error)
  });
