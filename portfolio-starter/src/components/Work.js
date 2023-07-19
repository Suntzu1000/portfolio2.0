import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { projects } from "../data/Data";

const Work = () => {
  return (
    <section className="mt-24 mb-24 p-6 bg-[#281D54] text-white mx-auto container" id="work">
      <div className="mx-4 lg:mx-0 flex flex-col lg:flex-row flex-wrap justify-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-6 mb-10 lg:mb-0"
        >
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl font-bold">Meus últimos trabalhos!</h2>
            <p className="text-lg">
              Aqui estão alguns dos projetos que eu fiz, sempre com muita
              energia e entusiasmo. Usando tecnologias modernas para uma melhor visualização!
            </p>
            <Link to="projects">
              <button className="bg-white text-[#281D54] hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded">
                Ver todos os projetos
              </button>
            </Link>
          </div>
          <motion.div
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4"
          >
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={project.image}
                  alt={project.name}
                />
                <div className="p-4 bg-purple-500 text-white">
                  <h3 className="font-bold text-xl">{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;




//group-hover:scale-125 transition-all duration-500
