import { Router } from "express"

import { createNewWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout } from "../controllers"

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

export default router
