"use client";

import GeneralInfoForm from "./form/general-info-form";

export default function StripeProductEditApp({
  productId,
  productTitle,
  description,
  quickDescription,
}: {
  productId: string;
  productTitle: string;
  description: string;
  quickDescription: string;
}) {
  return (
    <section className="space-y-8">
      <GeneralInfoForm
        productId={productId}
        productTitle={productTitle}
        description={description}
        quickDescription={quickDescription}
      />
    </section>
  );
}
