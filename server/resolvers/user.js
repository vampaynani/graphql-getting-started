module.exports = {
  links: async(parent, args, context) => {
    return await context.linkModel.find({author: parent.id});
  }
}