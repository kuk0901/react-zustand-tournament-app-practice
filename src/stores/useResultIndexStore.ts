import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const indexType: Array<number> = [];

export const useResultIndexStore = create<any>(
  persist(
    devtools((set) => ({
      resultIndex: indexType,
      setResultIndex: (arr: Array<number>) => set({ resultIndex: [...arr] }),
      resetResultIndex: () => set({ resultIndex: [] })
    })),
    { name: "resultIndex" }
  )
);
