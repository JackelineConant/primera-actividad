-- CreateTable
CREATE TABLE "escuela" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "direccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calle" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "colonia" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "codigo_postal" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alumno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido_paterno" TEXT NOT NULL,
    "apellido_materno" TEXT NOT NULL,
    "id_escuela" INTEGER NOT NULL,
    "id_direccion" INTEGER NOT NULL,
    CONSTRAINT "alumno_id_escuela_fkey" FOREIGN KEY ("id_escuela") REFERENCES "escuela" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "alumno_id_direccion_fkey" FOREIGN KEY ("id_direccion") REFERENCES "direccion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
