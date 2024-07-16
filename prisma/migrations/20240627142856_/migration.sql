/*
  Warnings:

  - You are about to drop the `OrderVia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderVia" DROP CONSTRAINT "OrderVia_id_product_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "lazadaPath" TEXT,
ADD COLUMN     "shopeePath" TEXT,
ADD COLUMN     "tiktokPath" TEXT,
ADD COLUMN     "tokopediaPath" TEXT;

-- DropTable
DROP TABLE "OrderVia";
