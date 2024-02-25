import { type UtilDefintion, type UtilType, type StateSlice, Theme } from '../types';

const initialFooState: UtilDefintion = {
  theme: Theme.Light,
};

export const createFooState: StateSlice<UtilType> = (set) => ({
  setTheme: (value: Theme) => set((state) => { state.util.theme = value }),
  ...initialFooState
});
