// import { useUtilStore } from "./util/util.ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { CombinedState } from "./types.ts";
import createFooState from "./util/util.ts";

const useStore = create<CombinedState>()(
  persist(
    immer((...api) => ({
      util: createFooState(...api),
    })),
    {
      name: "AppStore",
      // partialize: (state) => ({})
      merge: (_persistedState, currentState) =>
        // const _typePersistedState = persistedState as CombinedState | undefined;
        ({
          util: currentState.util,
        }),
    },
  ),
);

export default useStore;
