import React from "react";

const Button = ({ title, img, type }) => {
  let small = "text-sm px-5 py-2 w-52 md:w-full flex justify-center items-center bg-white  rounded-xl text-black m-4 lg:-mr-4 focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md";

  let medium = "px-4 py-4 flex justify-center items-center bg-white rounded text-black focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md";

  return (
    <div>
      <button className={type ? small  : medium ? mobile : medium}>
        <div class="mr-2">
          <img src={img} />
        </div>
        {title}
      </button>
    </div>
  );
};

export default Button;
