import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div className="mb-12 lg:m-6 xl:px-48 lg:px-24 md:px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
          <div className="m-1">
            <Link href="Administrador">
              <a>
                <Card
                  title="Solicitudes de creación de empresas"
                  reloj="2 solicitudes sin tratar"
                  image="images/empresa.svg"
                />
              </a>
            </Link>
          </div>
          <div className="m-1">
            <Card
              title="indicadores"
              reloj="Visitado por ultíma vez 31/01/2020"
              image="images/indicadores.svg"
            />
          </div>
          <div className="m-1">
            <Card
              title="Incripción de empledos en empresas"
              reloj="3 usuarios sin empresa registrada"
              image="images/empleados.svg"
            />
          </div>
          <div className="m-1">
            <Card
              title="Solicitudes de creación de empresas"
              reloj="532 usuarios activos en la plataforma"
              image="images/usuarios.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
