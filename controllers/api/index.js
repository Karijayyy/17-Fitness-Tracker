// referenced week 14 mini project 

const router = require("express").Router();
const db = require("../../models");

//get last workout 
router.get("/workouts", (req, res) => {
 
  });
  
// add workout 
  router.put("/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
   
  });
  
// this creates the workout 
  router.post("/workouts", ({ body }, res) => {
 
  });
  
  // this gets the workouts from the last sessions
  router.get("/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
  
  });

module.exports = router;
