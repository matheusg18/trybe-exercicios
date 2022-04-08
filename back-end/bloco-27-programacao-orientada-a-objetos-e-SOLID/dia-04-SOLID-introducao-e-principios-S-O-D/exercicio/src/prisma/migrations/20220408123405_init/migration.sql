-- CreateTable
CREATE TABLE `plant` (
    `id` VARCHAR(191) NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `size` INTEGER NOT NULL,
    `needsSun` BOOLEAN NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `waterFrequency` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
