import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    // here username, email are data points
    // username: String,
    // email: String,
    // isActivated: Boolean
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      // we can write models, validations
      type: String,
      required: true,
      unique: true,
      lowercase: true 
    },
    password: {
      type: String,
      required: true
      // required: [ 'Password must be required']
    },
  }, { timestamps: true}
)

export const User = mongoose.model('User', userSchema)