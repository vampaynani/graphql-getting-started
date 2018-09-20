const { getJWTPayload } = require('../utils');

module.exports = async (root, args, context) => {
  const { id } = getJWTPayload(context);
  return await context.linkModel.create({
    description: args.description,
    url: args.url,
    author: id
  })
}