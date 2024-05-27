import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useThemeStore = create<any>(
  persist(
    devtools((set) => ({
      themeMode: "dark",
      changeMode: (str: string) => set({ themeMode: str })
    })),
    { name: "theme" }
  )
);
