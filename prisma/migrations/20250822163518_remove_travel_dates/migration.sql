/*
  Warnings:

  - You are about to drop the column `endDate` on the `Travel` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Travel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Travel" DROP COLUMN "endDate",
DROP COLUMN "startDate";
