import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "React Developer",
    description: "Se você está procurando uma solução moderna para desenvolvimento de aplicações web, então React é a escolha certa.",
  },
  {
    name: "Node Developer",
    description: "Como desenvolvedor em Node.js, sou capaz de criar aplicativos altamente eficientes que são executados de maneira rápida e confiável. Isso significa que posso ajudar a criar soluções de software que são capazes de lidar com grandes volumes de tráfego e muitos usuários simultâneos, o que é especialmente importante em empresas que precisam escalar seus sistemas.",
  },
  {
    name: "Next Developer",
    description: "O Next.js é um framework JavaScript que permite criar aplicações web com React de forma fácil e rápida. Com ele, podemos desenvolver sites e aplicações com funcionalidades avançadas como SSR (server-side rendering), SSG (static site generation), roteamento dinâmico e muitas outras.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto pt-60 sm:pt-0 ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6 ">O que eu faço.</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">JavaScript Developer</h3>
            <Link to="work" activeClass="active" smooth={true} spy={true}>
              {" "}
              <button className="btn btn-sm"> Trabalhos</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-2 "
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 lg:h-[185px] mb-[38px] flex flex-1 xs:h-[350px]  "
                    key={index}
                  >
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight font-medium ">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
