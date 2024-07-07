import { create } from "zustand";

type ProductEditStore = {
  operations: number;
  incOperationByOne: () => void;
  decOperationByOne: () => void;
  setOpration: (value: number) => void;
  resetOperation: () => void;

  updateProductInfo: boolean;
  runingUpdateProductInfo: () => void;
  stopUpdateProductInfo: () => void;
};

export const useProductEditStore = create<ProductEditStore>((set) => ({
  operations: 0,
  incOperationByOne: () => set((s) => ({ operations: s.operations + 1 })),
  decOperationByOne: () =>
    set((s) => ({
      operations: s.operations !== 0 ? s.operations - 1 : s.operations,
    })),
  setOpration: (value) => set(() => ({ operations: value })),
  resetOperation: () => set(() => ({ operations: 0 })),

  // actions
  updateProductInfo: false,
  runingUpdateProductInfo: () => set((s) => ({ updateProductInfo: true })),
  stopUpdateProductInfo: () => set((s) => ({ updateProductInfo: false })),
}));
