import { Request, Response } from "express"

import WorkoutModel from "../models"

import isValidId from "../utils/isValidId"

// Get all workouts
const getAllWorkouts = async (req: Request, res: Response) => {
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })
  return res.status(200).json(workouts)
}

// Get single workouts
const getSingleWorkout = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid workout ID" })
  }

  const workout = await WorkoutModel.findById(id)

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }
  return res.status(200).json(workout)
}

// Create a new workout
const createNewWorkout = async (req: Request, res: Response) => {
  try {
    const workout = await WorkoutModel.create({ ...req.body })
    return res.status(200).json(workout)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      return res.status(400).json({ error: error.message })
    }
  }
}

//Delete a workout
const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid workout ID" })
  }

  const workout = await WorkoutModel.findByIdAndDelete(id)

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }

  return res.status(200).json({ msg: "Workout deleted" })
}

//Update a workout
const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid workout ID" })
  }

  const workout = await WorkoutModel.findByIdAndUpdate(id, { ...req.body })

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }

  return res.status(200).json({ msg: "Workout updated" })
}

//Add exercise to workout
const addExercise = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid workout ID" })
  }

  const workout = await WorkoutModel.findByIdAndUpdate(
    id,
    { $addToSet: { exercises: { ...req.body } } },
    { new: true, upsert: true, safe: true }
  )

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }

  return res.status(200).json({ msg: "Workout updated" })
}

//Remove exercise from a workout
const removeExercise = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid workout ID" })
  }

  const workout = await WorkoutModel.findByIdAndUpdate(id, { $pull: { exercises: { ...req.body } } })

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" })
  }

  return res.status(200).json({ msg: "Workout updated" })
}

export { createNewWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout, addExercise, removeExercise }
