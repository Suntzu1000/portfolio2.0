import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "React Developer",
    description: "Lorem",
    link: "Aprender mais",
  },
  {
    name: "Node Developer",
    description: "Lorem",
    link: "Aprender mais",
  },
  {
    name: "React Developer",
    description: "Lorem",
    link: "Aprender mais",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent mb-6 ">O que eu faço.</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">preencher</h3>
            <button btn btn-sm>
              Ver Mais Trabalhos
            </button>
          </div>
          <div className="flex-1 ">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex " key={index} >
                    <div className="max-w-[476px]" >
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 " >{name}</h4>
                      <p className="font-secondary leading-tight " >{description}</p>
                    </div>
                    <div>{link}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
