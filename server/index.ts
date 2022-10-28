import express from "express"

import workoutRoutes from "./routes"

const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

app.use("/api/workouts", workoutRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`))
