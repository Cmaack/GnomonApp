var mongoose = require('mongoose');


var appointmentSchema = mongoose.Schema({
  type_name:        { type:  String, required: true },
  datetime:         { type:  Date },
  location:         { type:  String },
  description:      { type:  String }

}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
