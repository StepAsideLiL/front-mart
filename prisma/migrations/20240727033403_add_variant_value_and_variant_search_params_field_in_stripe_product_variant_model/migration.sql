-- AlterTable
ALTER TABLE "StripeProductVariant" ADD COLUMN     "variantSearchParams" STRING NOT NULL DEFAULT '';
ALTER TABLE "StripeProductVariant" ADD COLUMN     "variantValues" STRING NOT NULL DEFAULT '{}';
