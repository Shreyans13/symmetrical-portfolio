import {
  type UtilDefintion,
  type UtilType,
  type StateSlice,
} from "../types.ts";

const initialUtilState: UtilDefintion = {
  someValue: "",
};

const createFooState: StateSlice<UtilType> = (set) => ({
  setSomeValue: (value: string) =>
    set((state) => {
      state.util.someValue = value;
    }),
  ...initialUtilState,
});

export default createFooState;
