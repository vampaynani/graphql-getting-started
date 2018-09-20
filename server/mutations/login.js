const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config');

module.exports = async (root, args, context, info) => {
  const user = await context.userModel.findOne({email: args.email});
  if(!user){
    throw new Error('Invalid credentials');
  }
  const isValid = await bcrypt.compare(args.password, user.password);
  if(!isValid){
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({id: user.id}, JWT_SECRET);
  return {
    token,
    user
  }
}