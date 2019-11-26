import express from 'express';
import services from './config/services';
import containerFactory from './container/container';

const container = containerFactory(services);

const seedApp = async () => {
  const app: express.Application = express();

  app.get('/', async (req, res) => {
    return res.send('Hello World');
  });

  app.use('/plants', await container.get('plantController'));

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Appp listening on port ${process.env.PORT || 3000}`);
  });
};

seedApp();
