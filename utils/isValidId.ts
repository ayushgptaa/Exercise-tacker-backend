import mongoose from "mongoose"

const isValidId = (id: string) => {
  return mongoose.Types.ObjectId.isValid(id)
}

export default isValidId
