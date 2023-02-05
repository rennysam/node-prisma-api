/*
  Warnings:

  - You are about to alter the column `dob` on the `form` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `form` MODIFY `dob` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `product`;
