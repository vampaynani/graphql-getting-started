const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

const getJWTPayload = (context) => {
  console.log();
  const Authorization = context.incomingData.request.header('authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const decodedToken = jwt.verify(token, JWT_SECRET);
    return decodedToken;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  getJWTPayload
}