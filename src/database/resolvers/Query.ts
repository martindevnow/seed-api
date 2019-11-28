import IPlant from '../../types/plant.type';
const Query = {
  plant: (_, args, ctx, info) => {
    const plant = ctx.db.plants.find((p: IPlant) => p.id === args.id);
    if (!plant) {
      throw Error('Plant not found');
    }
    return plant;
  },
  plants: (_, args, ctx, info) => ctx.db.plants,
};