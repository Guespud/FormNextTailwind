import { Input } from "postcss";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import Inputs from "../components/input/Input";

const Administrador = () => {
  return (
    <section>
      <Breadcrumb />
      <section className="bg-white w-942">
        <div className="flex flex-row">
          <img src="images/Logo.svg"></img>
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

        <div className="mt-12 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-8 justify-items-center">
          <Inputs label="Nombre de la empresa" title="PREVANLENTWARE" />
          <Inputs label="Razón social" title="PREVANLENTWARE" />
          <Inputs label="Tipo de Identificación" title="PREVANLENTWARE" />
          <Inputs label="Identificación" title="PREVANLENTWARE" />
          <Inputs label="Numero de empleados" title="PREVANLENTWARE" />
          <Button title="Aprobar Empresa" img="images/clip.svg" />
        </div>
      </section>
    </section>
  );
};

export default Administrador;
