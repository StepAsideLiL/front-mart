import { create } from "zustand";

type StripeStore = {
  isPerformingUpdateGeneralInfoAction: boolean;
  startPerformingUpdateGeneralInfoAction: () => void;
  stopPerformingUpdateGeneralInfoAction: () => void;
};

export const useStripeStore = create<StripeStore>((set) => ({
  isPerformingUpdateGeneralInfoAction: false,
  startPerformingUpdateGeneralInfoAction: () =>
    set(() => ({ isPerformingUpdateGeneralInfoAction: true })),
  stopPerformingUpdateGeneralInfoAction: () =>
    set(() => ({ isPerformingUpdateGeneralInfoAction: false })),
}));
