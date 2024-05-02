/*
  Warnings:

  - You are about to drop the column `number` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `count` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "number",
ADD COLUMN     "count" INTEGER NOT NULL;
