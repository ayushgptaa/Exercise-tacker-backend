import { Router } from "express"
import WorkoutModel from "../models"

import {
  createNewWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  addExercise,
  addsets,
  removeExercise
} from "../controllers"

const router = Router()

//GET all workouts
router.get("/", getAllWorkouts)

//GET single workout
router.get("/:id", getSingleWorkout)

//POST new workout
router.post("/", createNewWorkout)

//DELETE a workout
router.delete("/:id", deleteWorkout)

//Add exercise to workout
router.post("/add-exercise/:id", addExercise)

//Remove exercise from workout
router.delete("/remove-exercise/:id", removeExercise)

//Add sets to a exercise
router.post("/add-sets/:exerciseid", addsets)

//Temp route to delete all workouts
router.delete("/", async (req, res) => {
  await WorkoutModel.deleteMany({})
  res.status(200).json({ msg: "All workouts deleted" })
})

export default router
