import IStatusType from './status-type.type';

export default interface IStatusChange {
  id: string;
  plant: string;
  type: string; // ID
  date: string;
  time: string;
  value: number;
  unit?: string;
}