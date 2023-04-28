import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className=" py-5 bg-gradient-to-r">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="home">
            <header className="text-5xl font-bold xs:text-center xs:justify-items-center  "> <img src={Logo} alt="Logo" /> </header>
          </a>
            <button className="btn btn-sm xs:text-block hidden sm:block"> <a
                  href="https://wa.me/62995396918"
                  target="_blank"
                  rel="noopener noreferrer">Contrate-me </a> </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
