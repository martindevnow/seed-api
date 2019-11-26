import { PLANTS } from '../data/plant.data';
import { PlantInterface } from '../types/plant.type';

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

  const create = async (plant: PlantInterface) => {
    // console.log(`create ${plant.name}`);
    try {
      let sql = `INSERT INTO ${table} (id, name) VALUES (?, ?)`;
      await db.run(sql, plant.id, plant.name);
    } catch (err) {
      console.error(err);
      throw Error(err);
    }
  };

  const build = async () => {
    await db.run(`CREATE TABLE ${table} (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL UNIQUE
    )`);
  };

  const loadInitialData = async () => {
    PLANTS.forEach(async plant => await create(plant));
  };

  await build();
  await loadInitialData();

  cached = {
    all,
    create,
    rand
  };
  // console.log('plantService Generated', cached);
  return cached;
};

export default plantServiceFactory;
