import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemId: { type: 'String', required: true },
  parentItemId: {type: 'String'} 
  name: { type: 'String', required: true },
  thumbnail: {type: 'String'}
});

export default mongoose.model('Item', itemSchema);
