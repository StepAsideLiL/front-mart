import { create } from "zustand";

type StripeStore = {
  isPerformingUpdateGeneralInfoAction: boolean;
  startPerformingUpdateGeneralInfoAction: () => void;
  stopPerformingUpdateGeneralInfoAction: () => void;

  isPerformingUpdateProductVariantSchemaAction: boolean;
  startPerformingUpdateProductVariantSchemaAction: () => void;
  stopPerformingUpdateProductVariantSchemaAction: () => void;
};

export const useStripeStore = create<StripeStore>((set) => ({
  isPerformingUpdateGeneralInfoAction: false,
  startPerformingUpdateGeneralInfoAction: () =>
    set(() => ({ isPerformingUpdateGeneralInfoAction: true })),
  stopPerformingUpdateGeneralInfoAction: () =>
    set(() => ({ isPerformingUpdateGeneralInfoAction: false })),

  isPerformingUpdateProductVariantSchemaAction: false,
  startPerformingUpdateProductVariantSchemaAction: () =>
    set(() => ({ isPerformingUpdateProductVariantSchemaAction: true })),
  stopPerformingUpdateProductVariantSchemaAction: () =>
    set(() => ({ isPerformingUpdateProductVariantSchemaAction: false })),
}));
