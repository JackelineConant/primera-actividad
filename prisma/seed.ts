import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const escuela = await prisma.escuela.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nombre: "Tec de Monterrey",
    },
  });

  const direccion = await prisma.direccion.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      calle: "Ignacio Allende",
      numero: 6444105080,
      colonia: "Fundo Legal",
      ciudad: "Ciudad Obregón",
      estado: "Sonora",
      codigo_postal: 85000,
    },
  });

  console.log({ escuela });
  console.log{( direccion )};
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });