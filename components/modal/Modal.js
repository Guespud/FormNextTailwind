import React, { useState } from "react";

const Modal = ({ ModalOpen }) => {
  const [showModal, setShowModal] = useState(true);

  const Datos = [
    {
      name: "Rut PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/rut.svg",
    },
    {
      name: "Logo PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/logo.svg",
    },
    {
      name: "Acta de constitución PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/acta.svg",
    },
    {
      name: "Cámara de comercio PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/camara.svg",
    },
    {
      name: "Otro Documento PrevalentWare",
      url: "pdf/prueba.pdf",
      image: "images/PDF/otro.svg",
    },
  ];

  return (
    <div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <button
                    className="text-red-500 text-right background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                  {/*body*/}
                  <div className="ml-12 relative flex-auto pb-12 pt-6">
                    <h2 className="font-sans text-xl text-center font-medium m-0">
                      DOCUMENTOS CARGADOS
                    </h2>
                    {Datos.map((data) => {
                      return (
                        <div className="grid grid-cols-3">
                          <div className="m-6 grid col-span-2">
                            <h1 className="font-sans text-lg font-medium">
                              {data.name}
                            </h1>
                          </div>
                          <div className="m-2 grid col-span-1 text-right">
                            <img src={data.image}></img>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default Modal;
