import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import workoutRoutes from "./routes"

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

app.use("/api/workouts", workoutRoutes)

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(port, () => console.log(`Connect to DB & listening on port ${port}!`))
  })
  .catch((error) => {
    console.log(error)
  })
