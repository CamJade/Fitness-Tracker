const mongoose = require("mongoose");

const Schema = mongoose.Schema;


  

//add schema- add your exercise
const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
      },

      exercise: [
        {
          type: {
            type: String,
            trim: true,
          },
          name: {
            type: String,
            trim: true,
          },
          duration: Number,
          weight: {
            type: Number,
            default: 0
          },
          reps: {
            type: Number,
            default: 0
          },
          sets: {
            type: Number,
            default: 0
          },
          distance: {
            type: Number,
            default: 0
          }
        }
      ],
      totalDuration: {
        type: Number,
        default: 0,
      }
    
    });
    
//export
const workouts = mongoose.model("workouts", workoutSchema);
module.exports = workouts;