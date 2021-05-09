import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import Inputs from "../components/input/Input";
import Modal from "../components/modal/Modal";
import Navbar from "../components/navbar/Navbar";

const Administrador = () => {
  const [openModal, setOpenModal] = useState(false);

  const ModalOpen = () => {
    setOpenModal(true);
  };

  const ModalClose = () => {
    setOpenModal(false);
  };

  return (
    <section>
      <Navbar />
      <Breadcrumb />
      <div className="flex justify-center items-center pb-4">
        <section className="bg-white sm:w-full md:w-full lg:w-3/5 rounded-lg p-12 lg:pb-32 lg:pt-4">
          <div className=" lg:mt-4 md:mt-4 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 justify-items-center lg:justify-items-end">
            <img
              className="lg:col-span-2 md:col-span-2"
              src="images/Logo.svg"
            ></img>
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
          <div className="mt-12 mb-4 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 gap-x-0  justify-items-center">
            <Inputs label="Nombre de la empresa" title="PREVALENTEWARE" />
            <Inputs label="Razón social" title="PREVALENTWARE S.A.S" />
            <Inputs label="Tipo de Identificación" title="NIT" />
            <Inputs label="Identificación" title="901375150-4" />
            <Inputs label="# de empleados" title="1-10" />
            <button
              className="px-4 py-4 flex justify-center items-center bg-white rounded text-black focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md"
              onClick={() => ModalOpen()}
            >
              <img src="images/clip.svg" />
              Ver archivos adjuntos
            </button>
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <img src="images/slider.svg"></img>
      </div>
      <Modal ModalClose={ModalClose} openModal={openModal} />
    </section>
  );
};

export default Administrador;
