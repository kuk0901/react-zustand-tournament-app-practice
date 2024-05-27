import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useUIRandomImageIndexStore = create<any>(
  persist(
    devtools((set) => ({
      randomIndex: [...randomIndex()],
      resetRandomIndex: () => set({ randomIndex: [...randomIndex()] }),
      setRandomIndex: (arr: Array<number>) => set({ randomIndex: [...arr] }),
      mixIndex: () =>
        set((state: { randomIndex: Array<number> }) => ({
          randomIndex: [...state["randomIndex"].sort(() => Math.random() - 0.5)]
        }))
    })),
    { name: "imgIndex" }
  )
);

function randomIndex(num: number = 16): Array<number> {
  let randomIndexArray = [];
  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * 23);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}
