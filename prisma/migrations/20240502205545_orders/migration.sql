-- CreateTable
CREATE TABLE "Flowers" (
    "id" TEXT NOT NULL,
    "kind" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "Flowers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "kind" VARCHAR(255) NOT NULL,
    "numbers" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
