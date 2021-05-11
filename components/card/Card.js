import React from "react";

const Card = ({ title, reloj, image }) => {
  return (
    <>
      <div className="relative ml-4 -mb-10 z-50">
        <img src={image} />
      </div>
      <div className="z-0 flex items-center justify-between w-96 h-52 rounded-lg .shadow-lg ">
        <div className="flex flex-col w-full items-start rounded-lg bg-white shadow">
          <div className="w-full lg:w-/3 h-48 dark:bg-gray-800">
            <div className="text-2xl font-sans m-auto justify-center">
              <h3 className="ml-4 mt-20 mb-9">{title}</h3>
            </div>
            <hr></hr>
          </div>
          <div className="flex flex-row w-full rounded-lg h-10 dark:bg-gray-700 bg-white">
            <img className="-mt-6 ml-3" src="images/reloj.svg" />
            &nbsp;
            <p className="text-gray-500 text-xs font-sans">{reloj}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
