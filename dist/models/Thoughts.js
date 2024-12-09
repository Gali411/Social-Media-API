import { Schema, model } from "mongoose";
const thoughtSchema = new Schema({
    text: String,
});
const Thought = model('thought', thoughtSchema);
export default Thought;
