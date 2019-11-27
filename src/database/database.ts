import { buildSchema } from 'graphql';
import { PLANTS } from '../data/plant.data';

// GraphQL Schema
const schema = buildSchema(`
type Query {
  plant(id: Int!): Plant
  plants: [Plant]
}
type Plant {
  id: Int
  name: String
  species: String
  strain: String
}`);

const plantData = PLANTS;

const getPlant = (args: any) => {
  const id = args.id;
  return plantData.filter(p => p.id === id)[0];
};

const getPlants = () => plantData;

// Root Resolver
const root = {
  plant: getPlant,
  plants: getPlants
};

export { root, schema };
