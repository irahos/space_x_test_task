import { atom } from 'recoil';

export const isClickedState = atom({
  key: 'isClickedState',
  default: {} as Partial<Record<string, boolean>>,
});