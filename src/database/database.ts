import IPlant from '../types/plant.type';
import IUser from '../types/user.type';
import IStatusType from '../types/status-type.type';
import IStatusChange from '../types/status-change.type';

const PLANTS: IPlant[] = [
  { id: 'p1', name: 'mine', species: 'A', strain: 'B' },
  { id: 'p2', name: 'yours', species: 'C', strain: 'D' }
];

const USERS: IUser[] = [
  { id: 'u1', name: 'me', email: 'ben@me.com' },
];

const STATUS_TYPES: IStatusType[] = [
  { label: 'Planted', icon: 'planted' },
  { label: 'Germinated', icon: 'germinated' },
  { label: 'Seedling', icon: 'seedling' },
  { label: 'Cutting', icon: 'cutting' },
  { label: 'Vegetation', icon: 'vegetation' },
  { label: 'Flowering', icon: 'flowering' },
  { label: 'Drying', icon: 'drying' },
  { label: 'Curing', icon: 'curing' },
  { label: 'Harvested', icon: 'harvested' },
];

const STATUS_CHANGES: IStatusChange[] = [
  { id: 'sc1', plant: 'p1', type: 'planted', date: '2019-06-01', time: '12:00:00', value: 1 },
  { id: 'sc1', plant: 'p1', type: 'planted', date: '2019-06-01', time: '12:00:00', value: 1 },
]


const db = {
  plants: PLANTS,
};

export { db as default };
