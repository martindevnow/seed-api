import plantControllerFactory from '../controllers/plant.controller';
import plantServiceFactory from '../services/plant.service';

const database = require('sqlite-async');

const services = {
  plantController: async (container: any) => {
    const plantService = await container.get('plantService');
    return plantControllerFactory(plantService);
  },
  plantService: async (container: any) => {
    const db = await container.get('db');
    return plantServiceFactory(db);
  },
  db: async (container: any) => {
    const db = await database.open(':memory:');
    return db;
  }
};

export default services;
