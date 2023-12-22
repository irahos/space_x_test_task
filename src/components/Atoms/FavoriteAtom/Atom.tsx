import { atom } from 'recoil';
import { Rocket } from '../../Types/Rocket';



export const favoriteFlightsState = atom<Rocket[]>({
  key: 'favoriteFlightsState',
  default: [],
});