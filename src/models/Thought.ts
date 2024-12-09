import { Schema, model } from 'mongoose';
import { dateFormat } from '../utils/dateFormat.js';
import reactSchema from './Reaction.js';

interface IThought extends Document {
    text: string,
    username: string,
    createdAt: Schema.Types.Date,
    reactions: [typeof reactSchema]
}

const thoughtSchema = new Schema<IThought>({
    text: { type: String, required: true, minlength: 1, maxlength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date,
        default: Date.now,
        get: (timestamp:any) => dateFormat(timestamp)
   },
   reactions: [reactSchema]
},
   {
    toJSON: {
      getters: true
    },
    timestamps: true,
    id: false
  }
 );
 
 const Thought = model('Thought', thoughtSchema);

 export default Thought;
