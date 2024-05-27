import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useProgressBarStore = create<any>(
  persist(
    devtools((set) => ({
      barLength: 0,
      barValue: 0,
      setBarLength: (num: number) => set({ barLength: num }),
      setBarValue: (num: number) => set({ barValue: num }),
      resetBarLength: () => set({ barLength: 0 }),
      resetBarValue: () => set({ barValue: 0 })
    })),
    { name: "progressBar" }
  )
);
