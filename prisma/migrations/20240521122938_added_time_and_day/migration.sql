/*
  Warnings:

  - Added the required column `day` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "day" VARCHAR(255) NOT NULL,
ADD COLUMN     "time" INTEGER NOT NULL;
