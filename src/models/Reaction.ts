import { Schema, Types } from 'mongoose';
import { dateFormat } from '../utils/dateFormat.js';

interface IReaction extends Document {
    ReactID: Schema.Types.ObjectId,
    ReactText: string, 
    createdAt: Schema.Types.Date,
}

const reactSchema = new Schema<IReaction>({
    ReactID: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId()},
    ReactText:{ type: String, required: true},
    createdAt: {type: Date,
        default: Date.now,
        get: (timestamp:any) => dateFormat(timestamp)
   },
},
   {
    toJSON: {
      getters: true
    },
    timestamps: true,
    id: false
  }
 );

 export default reactSchema;