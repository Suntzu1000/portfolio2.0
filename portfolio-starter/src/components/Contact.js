import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const form = document.querySelector("#contact-form");
    setFormValid(form.checkValidity());
  };

  const notifySuccess = () => {
    toast.success("Enviada com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyError = () => {
    toast.error("Por favor, preencha todos os campos do formulário.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formValid) {
      notifyError();
      return;
    }

    emailjs
      .sendForm("Message", "template_rxxi3cg", e.target, "FWfIqkWp5xVQgLugA")
      .then(
        (result) => {
          notifySuccess();
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <section className="py-16 lg:section  " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start "
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Entrar em contato
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Como posso <br /> ajuda-lo?
              </h2>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
            onSubmit={sendEmail}
            id="contact-form"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="email"
              placeholder="Seu e-mail"
              required
              name="email"
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              placeholder="Seu Nome"
              required
              name="name"
            />

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              placeholder="Sua mensagem"
              name="message"
              required
            ></textarea>
            <input
              type="submit"
              className="btn btn-lg xs:text-xs"
              value="Enviar Mensagem"
              onClick={validateForm}
            />
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
