/*
  Warnings:

  - Added the required column `form_id` to the `equipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "equipments" ADD COLUMN     "form_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "equipments" ADD CONSTRAINT "equipments_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
