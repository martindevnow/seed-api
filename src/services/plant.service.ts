import db from '../database/database';
import IPlant from '../types/plant.type';

let cached: any = null;

const plantServiceFactory = async (db: any) => {
  if (cached) {
    // console.log('cached', cached);
    return cached;
  }
  const table = 'plants';
  const rand = Math.random();

  const all = async () => {
    return await db.all(`SELECT * FROM ${table}`);
  };

  const create = async (plant: IPlant) => {
    // console.log(`create ${plant.name}`);
    try {
      let sql = `INSERT INTO ${table} (id, name) VALUES (?, ?)`;
      await db.run(sql, plant.id, plant.name);
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  };

  const getById = async (id: number) => {
    try {
      let sql = `SELECT * FROM ${table} WHERE id = ?`;
      return await db.get(sql, id);
    } catch (err) {
      console.error(err);
      return new Error(err);
    }
  };

  const build = async () => {
    await db.run(`CREATE TABLE ${table} (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL UNIQUE
    )`);
  };

  const loadInitialData = async () => {
    db.plants.forEach(async plant => await create(plant));
  };

  const validateId = (id: number) => {
    return id && Number.isInteger(id);
  };

  await build();
  await loadInitialData();

  cached = {
    all,
    create,
    getById,
    validateId,
    rand
  };
  // console.log('plantService Generated', cached);
  return cached;
};

export default plantServiceFactory;
