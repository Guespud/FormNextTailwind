import React from "react";
import Link from "next/link";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <section>
      <nav className="h-75 flex items-center flex-wrap bg-gray-800 ">
        <Link href="/">
          <a className="inline-flex items-center sm:px-1 px-6 p-1 mr-4 ">
            <img className="h-75 w-75" src="images/LogoNav.svg"></img>
            <span className="text-sm text-white font-sans">
              Gente PreValiente
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex items-center sm:px-1 px-5">
            <HiSearch className="text-white" />
            <input
              className="bg-transparent text-white"
              placeholder="&nbsp;Buscar..."
              type="text"
            ></input>{" "}
          </div>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto ">
            <Link href="/">
              <a className="flex sm:flex-row lg:inline-flex lg:w-auto w-full sm:px-5 px-12 py-2 rounded text-white text-sm font-sans items-center justify-center hover:bg-gray-600 hover:text-white ">
                <img className="px-1" src="images/gear.svg" alt="Gear Logo" />
                &nbsp;Administración
              </a>
            </Link>
            <Link href="/">
              <a className="flex sm:flex-row lg:inline-flex lg:w-auto w-full sm:px-5 px-12 py-2 rounded text-white text-sm font-sans items-center justify-center hover:bg-gray-600 hover:text-white">
                <img className="px-1" src="images/bag.svg" alt="Bag Logo" />
                &nbsp;Empleo&nbsp;
                <img
                  className="px-1"
                  src="images/downArrow.svg"
                  alt="arrow Logo"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="flex sm:flex-row  lg:inline-flex lg:w-auto w-full sm:px-5 px-12 py-2 rounded text-white text-sm font-sans items-center justify-center hover:bg-gray-600 hover:text-white">
                <img className="px-1" src="images/cv.svg" alt="CV Logo" />
                &nbsp;Mi CV
              </a>
            </Link>
            <Link href="/">
              <a className="flex sm:flex-row  lg:inline-flex lg:w-auto w-full sm:px-5 px-12 py-2 rounded text-white text-sm font-sans items-center justify-center hover:bg-gray-600 hover:text-white">
                <img
                  className="px-1"
                  src="images/circleUser.svg"
                  alt="User Logo"
                />
                &nbsp;Daniel&nbsp;
                <img
                  className="px-1"
                  src="images/downArrow.svg"
                  alt="arrow Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
