-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);
