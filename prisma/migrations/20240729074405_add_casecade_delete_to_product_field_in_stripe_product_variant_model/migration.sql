-- DropForeignKey
ALTER TABLE "StripeProductVariant" DROP CONSTRAINT "StripeProductVariant_productId_fkey";

-- AddForeignKey
ALTER TABLE "StripeProductVariant" ADD CONSTRAINT "StripeProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
