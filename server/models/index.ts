import { Schema, model } from "mongoose"

const workoutSchema = new Schema(
  {
    title: String,
    exercises: [
      {
        name: String,
        reps: Number,
        weight: Number
      }
    ]
  },
  { timestamps: true }
)

const WorkoutModel = model("Workout", workoutSchema)

export default WorkoutModel
