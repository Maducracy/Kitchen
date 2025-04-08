// import { create } from "zustand";
// export const Counter2 = create((set) => ({
//   count: 0,
//   add: () => set((state) => ({ count: state.count + 1 })),
//   minus: () => set((state) => ({ count: state.count - 1 })),
//   del: () => set({ count: 0 }),
// }));
import { create } from "zustand";
export const Counter2 = create((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  minus: () => set((state) => ({ count: state.count - 1 })),
  del: () => set({ count: 0 }),
}));


