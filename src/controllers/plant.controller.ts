import express from 'express';

const plantControllerFactory = (plantService: any) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    return res.send(await plantService.all());
  });

  router.get('/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!plantService.validateId(id)) {
      res.status(422).json({ error: 'Error' });
    }
    const row = await plantService.getById(id);
    if (row) {
      return res.send();
    }
    res.status(404).json({ error: 'No entry found...' });
  });

  router.post('/', async (req, res) => {
    return res.send('PLANT :: Creating...');
  });

  return router;
};

export default plantControllerFactory;
