import { GraphQLServer, PubSub } from 'graphql-yoga'

// import services from './config/services';
// import containerFactory from './container/container';
import db from './database/database';

// const container = containerFactory(services);

const pubsub = new PubSub();
const resolvers = {

};

const server = new GraphQLServer({
  typeDefs: './database/schema.graphql',
  resolvers,
  context: {
    db,
    pubsub
  }
})


server.start(() => {
  console.log('The server is up!')
})
