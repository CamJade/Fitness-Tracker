const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//export
const Workouts = mongoose.model("workouts", workoutSchema);
module.exports = Workouts;