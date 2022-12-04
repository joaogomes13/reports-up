/*
  Warnings:

  - Added the required column `stand_id` to the `equipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "equipments" ADD COLUMN     "stand_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "equipments_stand_id_fkey" FOREIGN KEY ("stand_id") REFERENCES "stands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
