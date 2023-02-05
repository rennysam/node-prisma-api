/*
  Warnings:

  - You are about to drop the column `createdAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - Added the required column `dob` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_name_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `createdAt`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    ADD COLUMN `age` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `dob` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `middleName` VARCHAR(191) NOT NULL,
    ADD COLUMN `passportNumber` INTEGER NOT NULL DEFAULT 0;
