const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  url: String,
  description: String
});

LinkSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Link', LinkSchema);