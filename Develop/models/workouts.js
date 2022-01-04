const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  

//add schema- weight for resistance and duration of workouts
const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
      },
    value: {
        type: String,
        trim: true,
        required: "Choose type of workout to add: resistance or cardio.",
        enum: ['resistance', 'cardio']
      },
      name: {
        type: String,
        trim: true,
        required: "Name of exercise?"
    },
      weight: {
        type: Number,
        required: "Enter weight used for this workout(lbs)"
      },
      duration: {
        type: Number,
        required: "Enter duration of exercise(min)"
    },
      

});
//export
const Workouts = mongoose.model("workouts", workoutSchema);
module.exports = Workouts;