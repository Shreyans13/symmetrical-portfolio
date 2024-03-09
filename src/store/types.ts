import { StateCreator } from "zustand";

export interface UtilDefintion {
  someValue: string;
}

export interface UtilActions {
  setSomeValue: (value: string) => void;
}

export type UtilType = UtilActions & UtilDefintion;

export interface CombinedState {
  util: UtilType;
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [["zustand/immer", never]],
  [["zustand/persist", Partial<T>]],
  T
>;
