const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  

//add schema- add your exercise
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
    distance: {
        type: Number,
        required: function() {
          return (this.type === 'cardio' ? 'Enter distance(miles) of cardio workout' : false);
        }
      },
      weight: {
        type: Number,
        required: function() {
            return (this.type === 'resistance' ? 'Enter weight(lbs) for resistance workout' : false);
          
        }
      },
      duration: {
        type: Number,
        required: "Enter duration of exercise(min)"
    },
    sets: {
        type: Number,
        required: function() {
          return (this.type === 'resistance' ? 'Enter number of sets' : false);
        }
      },
      reps: {
        type: Number,
        required: function() {
          return (this.type === 'resistance' ? 'Enter number of reps' : false);
        }
      }
      

});
//export
const Workouts = mongoose.model("workouts", workoutSchema);
module.exports = Workouts;