import { create } from "zustand";

type ProductEditStore = {
  updateGeneralProductInfo: boolean;
  runingUpdateGeneralProductInfo: () => void;
  stopUpdateGeneralProductInfo: () => void;
};

export const useProductEditStore = create<ProductEditStore>((set) => ({
  updateGeneralProductInfo: false,
  runingUpdateGeneralProductInfo: () =>
    set(() => ({ updateGeneralProductInfo: true })),
  stopUpdateGeneralProductInfo: () =>
    set(() => ({ updateGeneralProductInfo: false })),
}));
