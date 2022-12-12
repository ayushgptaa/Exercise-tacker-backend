import { Schema, model } from "mongoose"

const workoutSchema = new Schema(
  {
    dayName: {
      type: String,
      required: true
    },
    exercises: [
      {
        name: {
          type: String,
          required: true
        },
        sets: [
          {
            reps: {
              type: Number,
              required: true
            },
            weight: {
              type: Number,
              required: true
            }
          }
        ]
      }
    ]
  },
  { timestamps: true }
)

const WorkoutModel = model("Workout", workoutSchema)

export default WorkoutModel
