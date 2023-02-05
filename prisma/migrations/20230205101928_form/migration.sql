/*
  Warnings:

  - You are about to drop the `forms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `forms`;

-- CreateTable
CREATE TABLE `Form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL DEFAULT 0,
    `gender` VARCHAR(191) NOT NULL,
    `passportNumber` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
