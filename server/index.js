const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const LinkModel = require('./models/link');
const UserModel = require('./models/user');
const Query = require('./queries');
const Mutation = require('./mutations');
const User = require('./resolvers/user');
const Link = require('./resolvers/link');
const typeDefs='./schema.graphql';

const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: incomingData => ({
    incomingData,
    linkModel: LinkModel,
    userModel: UserModel
  })
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}