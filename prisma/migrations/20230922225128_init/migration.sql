/*
  Warnings:

  - You are about to alter the column `codigo_postal` on the `direccion` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_direccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calle" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "colonia" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "codigo_postal" INTEGER NOT NULL
);
INSERT INTO "new_direccion" ("calle", "ciudad", "codigo_postal", "colonia", "estado", "id", "numero") SELECT "calle", "ciudad", "codigo_postal", "colonia", "estado", "id", "numero" FROM "direccion";
DROP TABLE "direccion";
ALTER TABLE "new_direccion" RENAME TO "direccion";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
