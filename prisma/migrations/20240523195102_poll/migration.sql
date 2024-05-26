-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "personal" VARCHAR(255) NOT NULL,
    "quality" VARCHAR(255) NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);
