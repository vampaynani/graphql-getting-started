const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.set('toObject', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.password;
  }
});

module.exports = mongoose.model('User', UserSchema);