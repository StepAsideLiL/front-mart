/*
  Warnings:

  - You are about to drop the column `quickOverview` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "quickOverview";
ALTER TABLE "Product" ADD COLUMN     "quickDescription" STRING DEFAULT '';
