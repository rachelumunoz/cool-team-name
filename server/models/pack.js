import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const packSchema = new Schema({
  name: { type: 'String', required: true }, 
  description: { type: 'String'}
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

export default mongoose.model('Pack', packSchema);
