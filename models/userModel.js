import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  tours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tour"
      },
    ],
});

const User = mongoose.model("User", userSchema);
export default User;
