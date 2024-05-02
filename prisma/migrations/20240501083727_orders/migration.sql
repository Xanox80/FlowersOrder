-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "kind" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
