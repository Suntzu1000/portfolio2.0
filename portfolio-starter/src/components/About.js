import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section " id="about" ref={ref}>
      <div className="container mx-auto py-12 sm:py-8 ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent ">Sobre mim.</h2>
            <h3 className="h3 mb-4">
              Eu sou um Desenvolvedor JavaScript com 3 anos de experiência
            </h3>
            <p className="mb-5">
              Tenho bastante vontade de estar sempre evoluindo podendo ajudar
              outras pessoas, com isso absorver o máximo de conhecimento que
              essa vida pode me proporcionar e como resultado de querer sempre
              evolução procuro desafios e experiências que possam me tornar uma
              pessoa melhor!
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Anos de <br />
                  experiência
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos no <br />
                  <a
                    href="https://github.com/Suntzu1000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center ">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contrate-me</button>
              </Link>
              <a
                href="https://github.com/Suntzu1000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meu GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
