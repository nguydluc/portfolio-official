import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

export default function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="xl:px-24 flex flex-wrap justify-between items-center bg-brandoffwhite">
      {/* This is our logo */}
      <a href="/" className="cursor-pointer">
        <img src={Logo} alt="Logo" className="h-20 w-20 m-4" />
      </a>
      {/* burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="m-4 rounded-lg p-2 hover:bg-gray-100 focus:ring-1 focus:ring-brandbluegrey lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${
          isMobileMenuShown
            ? "absolute inset-0 z-50 mt-[100px] opacity-100 h-auto"
            : "absolute inset-0 z-50 mt-[100px] lg:mt-4 opacity-0 lg:opacity-100 h-0"
        } w-[100%] lg:block lg:w-auto transition-opacity duration-5000`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row lg:justify-end rounded-lg bg-gray-50 lg:bg-transparent text-lg border-gray-100 lg:border-none p-4">
          {ROUTES.map((route, i) => (
            <li
              className="px-3 py-2 cursor-pointer hover:text-brandgreen"
              key={route.name}
            >
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
