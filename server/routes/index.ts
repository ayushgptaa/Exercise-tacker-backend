import { Router } from "express"
import WorkoutModel from "../models"

import {
  createNewWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
  addExercise,
  removeExercise
} from "../controllers"

const router = Router()

//GET all workouts
router.get("/", getAllWorkouts)

//GET single workout
router.get("/:id", getSingleWorkout)

//POST new workout
router.post("/", createNewWorkout)

//DELETE new workout
router.delete("/:id", deleteWorkout)

//UPDATE new workout
router.patch("/:id", updateWorkout)

//Add exercise to workout
router.patch("/:id/exercises", addExercise)

//Add exercise to workout
router.delete("/:id/exercises", removeExercise)

//Temp route to delete all workouts
router.delete("/", async (req, res) => {
  await WorkoutModel.deleteMany({})
  res.status(200).json({ msg: "All workouts deleted" })
})

export default router
