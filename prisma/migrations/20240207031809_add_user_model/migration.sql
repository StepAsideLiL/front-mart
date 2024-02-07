-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL DEFAULT '',
    "email" STRING NOT NULL DEFAULT '',
    "address" STRING NOT NULL DEFAULT '',
    "zipCode" STRING NOT NULL DEFAULT '',
    "city" STRING NOT NULL DEFAULT '',
    "country" STRING NOT NULL DEFAULT '',
    "orders" STRING[],
    "wishList" STRING[],
    "date" INT4 NOT NULL DEFAULT 0,
    "month" INT4 NOT NULL DEFAULT 0,
    "year" INT4 NOT NULL DEFAULT 0,
    "isDummy" BOOL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
