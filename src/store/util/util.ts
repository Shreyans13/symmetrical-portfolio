import { type UtilDefintion, type UtilType, type StateSlice } from '../types';

const initialUtilState: UtilDefintion = {
  someValue: "",
};

export const createFooState: StateSlice<UtilType> = (set) => ({
  setSomeValue: (value: string) => set((state) => { state.util.someValue = value }),
  ...initialUtilState
});
