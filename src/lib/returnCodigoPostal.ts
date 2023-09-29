import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCodigoPostal(id: number) {
    const direccion = await prisma.direccion.findUnique({
        where: {
            id : id,
        },
        select: {
            codigo_postal: true
        }
    })
    console.log(direccion?.codigo_postal);
    return direccion?.codigo_postal;
};