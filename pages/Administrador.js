import { Input } from "postcss";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import Inputs from "../components/input/Input";

const Administrador = () => {
  return (
    <section>
      <Breadcrumb />
      <div className="flex justify-center items-center pb-4">
        <section className="bg-white sm:w-full md:w-full lg:w-3/5 rounded-lg">
          <div className=" lg:mt-4 md:mt-4 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 justify-items-center lg:justify-items-end">
            <img className="lg:col-span-2 md:col-span-2" src="images/Logo.svg"></img>
            <div>
              <Button
                title="Aprobar Empresa"
                img="images/check.svg"
                type="small"
              />
              <Button
                title="Rechazar Empresa"
                img="images/cancel.svg"
                type="small"
              />
            </div>
          </div>
          <div className="mt-12 mb-4 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <Inputs label="Nombre de la empresa" title="PREVANLENTWARE" />
            <Inputs label="Razón social" title="PREVANLENTWARE" />
            <Inputs label="Tipo de Identificación" title="PREVANLENTWARE" />
            <Inputs label="Identificación" title="PREVANLENTWARE" />
            <Inputs label="# de empleados" title="PREVANLENTWARE" />
            <Button title="Ver archivos adjuntos" img="images/clip.svg" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Administrador;
