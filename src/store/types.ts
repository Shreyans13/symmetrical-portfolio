import { StateCreator } from 'zustand';

export enum Theme {
  Light = "light",
  Dark = "dark"
}

export interface UtilDefintion {
  theme: Theme;
}

export interface UtilActions {
  setTheme: (value: Theme) => void;
}

export type UtilType = UtilActions & UtilDefintion;

export interface CombinedState {
  util: UtilType;
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [['zustand/persist', Partial<T>]],
  T
>;
