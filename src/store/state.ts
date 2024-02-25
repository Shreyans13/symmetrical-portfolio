// import { useUtilStore } from "./util/util.ts";
import { create } from "zustand";
import { CombinedState } from "./types";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createFooState } from "./util/util";


export const useStore = create<CombinedState>()(
  persist(
    immer((...api) => ({
      util: (createFooState(...api))
    })),
    {
      name: "AppStore",
      // partialize: (state) => ({})
      merge: (_persistedState, currentState) => {
        // const _typePersistedState = persistedState as CombinedState | undefined;
        return {
          util: currentState.util
        }
      }
    }
  )
)
