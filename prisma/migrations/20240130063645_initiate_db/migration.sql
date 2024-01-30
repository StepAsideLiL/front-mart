-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'processing', 'shipped', 'delivered', 'canceled');

-- CreateTable
CREATE TABLE "Product" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "price" FLOAT8 NOT NULL,
    "discount" FLOAT8 DEFAULT 0,
    "description" STRING DEFAULT '',
    "quickOverview" STRING DEFAULT '',
    "imageSrc" STRING DEFAULT '',
    "isFeatured" BOOL DEFAULT false,
    "date" INT4 NOT NULL DEFAULT 0,
    "month" INT4 NOT NULL DEFAULT 0,
    "year" INT4 NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "address" STRING NOT NULL,
    "zipCode" STRING NOT NULL,
    "city" STRING NOT NULL,
    "country" STRING NOT NULL,
    "products" JSONB NOT NULL,
    "price" FLOAT8 NOT NULL,
    "orderStatus" "OrderStatus" NOT NULL DEFAULT 'pending',
    "date" INT4 NOT NULL,
    "month" INT4 NOT NULL,
    "year" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");
