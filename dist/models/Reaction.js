import { Schema, Types } from 'mongoose';
import { dateFormat } from '../utils/dateFormat.js';
const reactSchema = new Schema({
    ReactID: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    ReactText: { type: String, required: true },
    createdAt: { type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
}, {
    toJSON: {
        getters: true
    },
    timestamps: true,
    id: false
});
export default reactSchema;
