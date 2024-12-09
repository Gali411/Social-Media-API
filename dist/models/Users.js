import { Schema, model } from "mongoose";
const userSchema = new Schema({
    username: String,
});
const User = model('user', userSchema);
export default User;
