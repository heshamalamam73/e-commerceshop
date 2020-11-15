import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, required: true },
  isAdmin: { type: Boolean, required: true, default: true },
  image: { type: String, required: false },
});
userSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("User", userSchema);

export default userModel;
