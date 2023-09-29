import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEscuela(id: number) {
    const escuela = await prisma.escuela.findUnique({
        where: {
            id : id,
        },
        select: {
            nombre: true
        }
    })
    console.log(escuela?.nombre);
    return escuela?.nombre;
};

// function main() {}


// getEscuela()
//   .then(() => prisma.$disconnect())
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit();
//   });
