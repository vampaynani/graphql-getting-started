module.exports = {
  author: async(parent, args, context) => {
    return await context.userModel.findOne({_id: parent.author});
  }
}