import React from "react";

const Input = ({ title, label }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-400 text-xs font-sans ">{label}</label>
      <input
        className="font-bold pt-3 pb-2 block w-64 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-300"
        type="text"
        placeHolder={title}
      ></input>
    </div>
  );
};

export default Input;
