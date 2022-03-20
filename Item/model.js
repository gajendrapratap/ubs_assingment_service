
import mongoose,{ Schema, model } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const itemSchema = new Schema({
  name: { type: String, require: true },
  //[{attr1:"",attr2:""}]
  attributes: []
});
itemSchema.plugin(AutoIncrement, {inc_field: 'id'});
export default model('item', itemSchema);