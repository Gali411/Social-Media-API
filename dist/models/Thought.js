import { Schema, model } from 'mongoose';
import { dateFormat } from '../utils/dateFormat.js';
import reactSchema from './Reaction.js';
const thoughtSchema = new Schema({
    text: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    reactions: [reactSchema]
}, {
    toJSON: {
        getters: true
    },
    timestamps: true,
    id: false
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
