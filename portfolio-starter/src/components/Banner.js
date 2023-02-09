import React from "react";
import Image from "../assets/avatar.svg";
import {Link} from 'react-scroll'

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div className="absolute top-20 ">
          <div>
            <h1>
              <a
                href="https://github.com/Suntzu1000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Gabriel</span>
              </a>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ">
              <span className=" text-white mr-4">
                Eu sou um Desenvolvedor JavaScript
              </span>
              <TypeAnimation
                sequence={["ReactJS", 2000, "NextJS", 2000, "NodeJS"]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              Tenho 18 anos, sou desenvolvedor de sistemas e estou focado na
              linguagem JavaScript, entendendo frameworks como React, Node,
              Next e aprendendo React-Native. Sou um apaixonado por tecnologias
              e movido á desafios!
            </p>
            <button className="btn btn-lg" >Contrate-me</button>
            <Link to="services" className="text-gradient btn-link" > <a href="">Meu Portfólio</a> </Link>
          </div>

          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
