import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import Inputs from "../components/input/Input";
import Modal from "../components/modal/Modal";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/form/Form";

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
      <div className="pb-4">
        <div className="flex flex-col justify-center items-center pb-2">
          <section className="bg-white sm:w-full md:w-full lg:w-3/5 rounded-lg p-12 lg:pb-16 lg:pt-4">
            <div className=" lg:mt-4 md:mt-4 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 justify-items-end">
              <img
                className="xl:col-span-2 lg:col-span-2 md:col-span-2"
                src="images/Logo.svg"
              ></img>
              <div className="flex hidden lg:flow-root md:flow-root xl:flow-root">
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
            <div className="mt-6 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 gap-x-0  justify-items-center">
              <Inputs label="Nombre de la empresa" title="PREVALENTEWARE" />
              <Inputs label="Razón social" title="PREVALENTWARE S.A.S" />
              <Inputs label="Tipo de Identificación" title="NIT" />
              <Inputs label="Identificación" title="901375150-4" />
              <Inputs label="# de empleados" title="1-10" />
              <button
                className="hidden lg:inline-flex md:inline-flex xl:inline-flex px-4 py-4 flex justify-center items-center bg-white rounded text-black focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md"
                onClick={() => ModalOpen()}
              >
                <img src="images/clip.svg" />
                Ver archivos adjuntos
              </button>
              <div className="flex sm:hidden inline-grid">
                <Form />
              </div>
              <Modal ModalClose={ModalClose} openModal={openModal} />
            </div>
          </section>
          <div className="flex sm:hidden flow-root">
            <Button
              title="Aprobar Empresa"
              img="images/check.svg"
              type="mobile"
            />
            <Button
              title="Rechazar Empresa"
              img="images/cancel.svg"
              type="mobile"
            />
          </div>
          <div className="justify-center items-center pb-4 pt-2 order-first md:order-last">
            <img src="images/slider.svg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Administrador;
