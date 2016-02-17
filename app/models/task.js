var mongoose = require('mongoose');


var taskSchema = mongoose.Schema({
  title: { type: String},
  notes: { type: String}
  
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
