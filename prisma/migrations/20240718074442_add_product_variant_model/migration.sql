-- CreateTable
CREATE TABLE "StripeProductVariant" (
    "id" STRING NOT NULL,
    "variant" STRING NOT NULL DEFAULT '',
    "stripeProductId" STRING NOT NULL DEFAULT '',
    "stripePriceId" STRING NOT NULL DEFAULT '',
    "productId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StripeProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StripeProductVariant_id_key" ON "StripeProductVariant"("id");

-- AddForeignKey
ALTER TABLE "StripeProductVariant" ADD CONSTRAINT "StripeProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
