import React from "react";
import Image from "../assets/avatar.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              Gabriel <span>Andrade</span>
            </h1>
            <div className="mb-6 text-[36px] " >
              <span className='mr-4' >Eu sou um</span>
              <TypeAnimation
                sequence={[
                  "Desenvolvedor JavaScript",
                  2000,
                  "ReactJS",
                  2000,
                  "NextJS",
                  2000,
                  "NodeJS",
                ]}
                speed={50}
                className='text-accent'
                wrapper="span"
                repeat={Infinity}
              />
            </div>
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
