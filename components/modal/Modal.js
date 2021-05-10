import React from "react";
import Form from '../form/Form'

const Modal = ({ openModal, ModalClose }) => {


  return (
    <div>
      <>
        {openModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <button
                    className="text-black-500 text-right background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => ModalClose(false)}
                  >
                    x
                  </button>
                  <div className="ml-12 relative flex-auto pb-12 pt-6">
                  <Form/>
                  </div>
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
