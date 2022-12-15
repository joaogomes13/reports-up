/*
  Warnings:

  - You are about to drop the column `form_id` on the `equipments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "equipments" DROP CONSTRAINT "equipments_form_id_fkey";

-- AlterTable
ALTER TABLE "equipments" DROP COLUMN "form_id";
