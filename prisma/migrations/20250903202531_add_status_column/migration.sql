/*
  Warnings:

  - You are about to drop the column `isActive` on the `Travel` table. All the data in the column will be lost.
  - Changed the type of `role` on the `UserTravel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "public"."TravelStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "public"."Travel" DROP COLUMN "isActive",
ADD COLUMN     "status" "public"."TravelStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "public"."UserTravel" DROP COLUMN "role",
ADD COLUMN     "role" "public"."UserRole" NOT NULL;
