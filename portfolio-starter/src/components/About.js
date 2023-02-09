import React from "react";

import CountUp from "react-countup"

import {useInView} from "react-intersection-observer"

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <div  className="section " id="about" ref={ref}>
     <div className="container mx-auto ">
      <div>
        <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top  " >img</div>

        <div>
          <h2>Sobre mim.</h2>
          <h3>Eu sou um Desenvolvedor JavaScript com 3 anos de experiência</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam illum optio id rerum, similique corrupti reprehenderit esse suscipit molestiae aliquid recusandae excepturi laboriosam atque tenetur dolor maiores reiciendis libero.</p>
        </div>

        <div className="flex" >
          <div>
            <div className="text-[40px] font-tertiary text-gradient mb-2 " >
              <CountUp start={0} end={13} duration={3} />
            </div>
            <div classNames="font-primary text-sm tracking-[2px]" >
              Anos de <br />
              experiência
            </div>
          </div>
        </div>


      </div>
     </div>
    </div>
  );
};

export default About;
