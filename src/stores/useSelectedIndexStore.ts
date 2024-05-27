import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const indexType: Array<number> = [];

export const useSelectedIndexStore = create<any>(
  persist(
    devtools((set) => ({
      selectedIndex: indexType,
      getSelectedIndex: (arr: Array<number>) =>
        set({
          selectedIndex: [...arr]
        }),
      clearSelectedIndex: () => set({ selectedIndex: [] })
    })),
    { name: "selectedIndex" }
  )
);
