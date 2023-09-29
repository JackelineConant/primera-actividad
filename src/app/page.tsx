import { prisma } from "@/lib/prisma";
import { getEscuela } from "@/lib/returnEscuela";
import { getCodigoPostal } from "@/lib/returnCodigoPostal";
import Image from "next/image";

export default async function Home() {
  let alumnos = await prisma.alumno.findMany();
  //let direccion = await prisma.direccion.findMany
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {alumnos.map((alumno) => (
          <div
            key={alumno.id}
            style={{ border: "2px solid #ccc", textAlign: "center", padding: 10 }}
          >
            {/*<Image src={"https://www.diariodenavarra.es/uploads/2021/02/18/60ae5c9db9f42.jpeg"} alt="sopa" width= {100} height={100}/>*/}
            
            <Image src={"https://static.wikia.nocookie.net/gatopedia/images/2/2e/El_gatoo.png/revision/latest?cb=20230103150310&path-prefix=es"} alt="sopa" width= {100} height={100}/>

            <h3>Nombre:  {alumno.apellido_paterno}</h3>
            <h3>Escuela: {getEscuela(alumno.id_escuela)}</h3>
            <h3>Código Postal:  {getCodigoPostal(alumno.id_direccion)}</h3>

          </div>
        ))}
      </div>
    </main>
  );
}
