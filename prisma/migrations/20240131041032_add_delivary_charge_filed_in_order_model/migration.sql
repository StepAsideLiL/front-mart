/*
  Warnings:

  - Added the required column `delivaryCharge` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "delivaryCharge" FLOAT8 NOT NULL;
