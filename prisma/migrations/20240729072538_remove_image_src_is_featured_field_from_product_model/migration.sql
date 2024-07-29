/*
  Warnings:

  - You are about to drop the column `imageSrc` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isFeatured` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageSrc";
ALTER TABLE "Product" DROP COLUMN "isFeatured";
