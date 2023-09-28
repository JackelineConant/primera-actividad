import { prisma } from "@/lib/prisma";

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
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <h3>{alumno.apellido_paterno}</h3>
            <h3>{}</h3>

          </div>
        ))}
      </div>
    </main>
  );
}
