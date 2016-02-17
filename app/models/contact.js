var mongoose = require('mongoose');


var contactSchema = mongoose.Schema({
  firstName: { type: String},
  lastName: { type: String},
  phone: { type: String},
  email: { type: String},
  street: { type: String},
  city: { type: String},
  zip: { type: String},
  state: { type: String},
  url: { type: String}

}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
