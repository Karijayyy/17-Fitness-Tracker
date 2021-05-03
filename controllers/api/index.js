// referenced week 14 mini project 

const router = require("express").Router();
const db = require("../../models");

//get last workout 
router.get("/workouts", (req, res) => {
    .sort({ day: "asc" })
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });

  });
  
// adds workout 
  router.put("/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
      )
        .then((workoutDB) => {
          res.json(workoutDB);
        })
        .catch((err) => {
          res.json(err);
        });
  });
  
// this creates the workout 
  router.post("/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
  });
  
  // this gets the workouts from the last sessions
  router.get("/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ])
        .then((workoutDB) => {
          console.log(workoutDB);
          res.json(workoutDB);
        })
        .catch((err) => {
          res.json(err);
        });
    });

module.exports = router;
