/*
  Warnings:

  - Made the column `discount` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageSrc` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isFeatured` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isDummy` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quickDescription` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "discount" SET NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "imageSrc" SET NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "isFeatured" SET NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "isDummy" SET NOT NULL;
ALTER TABLE "Product" ALTER COLUMN "quickDescription" SET NOT NULL;
