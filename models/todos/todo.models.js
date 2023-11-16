import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete:{
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    //an array of subTodos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
      }
    ]
  }, { timestamps: true}
)
// In databse Todo is stored as todos
export const Todo = mongoose.model('Todo', todoSchema)