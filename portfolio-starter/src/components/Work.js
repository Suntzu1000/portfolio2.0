import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import { Link } from "react-scroll";
const Work = () => {
  return (
    <section className="section mt-96 " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0  "
          >
            <a
              href="https://apresentacao-ebon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-1 flex flex-col gap-y-10 ">
                <h2 className="h2 leading-tight text-accent ">
                  Meu últimos <br />
                  trabalhos!
                </h2>
                <p className="max-w-sm mb-16 ">
                  Aqui estão, alguns projetos feitos por mim sempre com muita
                  energia depositada em cada projeto feito. Com Tecnologias
                  modernas para uma melhor vizualização para quem vai acessa-lo!
                </p>
                <Link to="projects">
                  <button className="btn btn-sm">Ver todos os Projetos</button>
                </Link>
              </div>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500 "
                  src={img1}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-500  ">
                  <span className="text-gradient">Landing Page</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                  <span className="text-3xl text-white hover:text-red-400 ">
                    Acessar
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <a
              href="https://bancoteste.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 "
                  src={img2}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-500  ">
                  <span className="text-gradient">Desing</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                  <span className="text-3xl text-white ">Acessar</span>
                </div>
              </div>
            </a>

            <a
              href="https://admin-front-end.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500 "
                  src={img3}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-500  ">
                  <span className="text-gradient">Administração</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                  <span className="text-3xl text-white "> Acessar</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
