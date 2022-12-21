import { Router } from "express"
import WorkoutModel from "../models"

import {
  createNewWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  addExercise,
  addsets,
  updateSets,
  removeSets,
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

//Add sets to an exercise
router.post("/add-sets/:exerciseid", addsets)

//Update sets for an exercise
router.patch("/update-set/:setId", updateSets)

//Remove set for an exercise
router.delete("/remove-set/:setId", removeSets)

//Temp route to delete all workouts
router.delete("/", async (req, res) => {
  await WorkoutModel.deleteMany({})
  res.status(200).json({ msg: "All workouts deleted" })
})

export default router
