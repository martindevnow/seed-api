import express from 'express';
import services from './config/services';
import containerFactory from './container/container';
import express_graphql from 'express-graphql';
import { schema, root } from './database/database';

const container = containerFactory(services);

const seedApp = async () => {
  const app: express.Application = express();

  // app.get('/', async (req, res) => {
  //   return res.send('Hello World');
  // });

  // app.use('/plants', await container.get('plantController'));

  app.use(
    '/graphql',
    express_graphql({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Appp listening on port ${process.env.PORT || 3000}`);
  });
};

seedApp();
