import { GalaxyInterFace } from './galaxy';

export interface StarInterFace {
  _id: String;
  name: String;
  age: Number;
  isAlive: Boolean;
  galaxy: GalaxyInterFace;
}
