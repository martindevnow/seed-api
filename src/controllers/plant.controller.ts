import express from 'express';

const plantControllerFactory = (plantService: any) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    return res.send(await plantService.all());
  });

  return router;
};

export default plantControllerFactory;
