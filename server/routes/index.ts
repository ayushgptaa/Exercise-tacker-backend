import { Router } from "express"

const router = Router()

//GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" })
})

//GET single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single workout" })
})

//POST new workout
router.post("/", (req, res) => {
  res.json({ msg: "POST new workout" })
})

//DELETE new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" })
})

//UPDATE new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" })
})

export default router
