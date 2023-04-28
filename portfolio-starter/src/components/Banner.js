import React from "react";
import Image from "../assets/avatar.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const Banner = () => {
  return (
    <section
      className=" section min-h-[85vh] lg:min-h-[78vh] flex items-center mb-auto "
      id="home"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 relative top-10 ">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              <a
                href="https://github.com/Suntzu1000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Gabriel</span>
              </a>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className=" text-white mr-4">Eu sou um Desenvolvedor</span>
              <br />
              <TypeAnimation
                sequence={[
                  "JavaScript",
                  4000,
                  "Typescript",
                  4000,
                  "Frameworks:",
                  2000,
                  "ReactJS",
                  2000,
                  "NextJS",
                  2000,
                  "NodeJS",
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />

             
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Tenho 18 anos, sou desenvolvedor de sistemas e estou focado na
              linguagem JavaScript, entendendo frameworks como React, Node, Next
              e aprendendo React-Native. Sou um apaixonado por tecnologias e
              movido á desafios!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:flex max-w-max gap-x-6 items-center mb-12 mx-auto lx:mx-0 xs:grid xs:gap-4 xs:grid-cols-1 "
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg ">  Contrate-me</button>
              </Link>

              <Link
                to="services"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link"
              >
                {" "}
                <a href="services" target="_blank" rel="noopener noreferrer">
                 <p> Meu Portfólio</p>
                </a>{" "}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[60px] gap-x-6 max-w-max mx-auto lg:mx-0  "
            >
              <a
                href="https://github.com/Suntzu1000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-andrade-52a803205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/62995396918"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto  "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
