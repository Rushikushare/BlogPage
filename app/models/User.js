import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
});

// Prevent model overwrite during hot-reload
const User = models.User || mongoose.model("User", UserSchema);

export default User;
