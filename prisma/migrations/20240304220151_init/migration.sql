/*
  Warnings:

  - Added the required column `score` to the `axieTeam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "axieTeam" ADD COLUMN     "score" INTEGER NOT NULL;
