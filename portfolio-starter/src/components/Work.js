import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { projects } from "../data/Data";

const Work = () => {
  return (
    <section className="section mt-96 mb-96 " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center mx-4 lg:mx-0 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0  "
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
                <button className="btn btn-sm">Todos Projetos</button>
              </Link>
            </div>
            <motion.div
              variants={fadeIn("", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="grid gap-4 grid-cols-4 grid-rows-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-4 xs:grid-cols-1  xs:grid-col-1 "
            >
              {projects.map((project, index) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-64 h-74 ">
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 " />
                    <img
                      className="group-hover:scale-125 transition-all duration-500 "
                      src={project.image}
                      alt=""
                    />
                    <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-500  ">
                      <span className="text-gradient">{project.name}</span>
                    </div>
                    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50  ">
                      <span className="text-3xl text-white hover:text-red-400 ">
                        Acessar
                      </span>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden border-4 border-white/50 rounded-xl w-64 h-74 " >
                  <div className="hidden lg:block absolute -bottom-full  group-hover:relative group-hover:text-center transition-all duration-500 z-500 ">
                      <p className="text-white">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
//group-hover:scale-125 transition-all duration-500
