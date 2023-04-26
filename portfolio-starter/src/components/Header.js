import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-5 bg-gradient-to-r from-red-400 to-red-700 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="home">
            <h1 className="text-5xl font-bold xs:text-center xs:justify-items-center  ">Portfólio</h1>
          </a>
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm xs:text-block hidden sm:block">Contrate-me </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
