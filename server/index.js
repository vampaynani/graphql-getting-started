const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const Link = require('./models/link');
const Query = require('./queries');
const typeDefs='./schema.graphql';

const resolvers = {
  Query,
  Mutation: {
    post: async (root, args) => {
      return await Link.create({
        description: args.description,
        url: args.url
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}