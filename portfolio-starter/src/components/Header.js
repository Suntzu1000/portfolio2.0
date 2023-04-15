import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-5 bg-gradient-to-r from-red-400 to-red-700 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="home">
            <h1 className="text-5xl font-bold  ">Portfólio</h1>
          </a>
          <Link to="contact" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm"> <p className="lg:text-base text-xs">Contrate-me</p> </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
