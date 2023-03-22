import { createElement, useEffect, useRef, useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


const Contact = () => {
  const { Contact } = content;
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  const sendMessage = async (event) => {
    event.preventDefault();
    const formData={name:nameRef.current.value,
          email:emailRef.current.value,
          message:messageRef.current.value}
    console.log(formData)
    try{
      const data = await axios.post(
        " https://2sd2jql9bj.execute-api.us-east-1.amazonaws.com/dev/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        console.log(data);
      
    }catch(err){
      console.error(err)
    }
    
  };


  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            
            onSubmit={sendMessage}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              ref={nameRef}
              name="name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              ref={emailRef}
              name="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              ref={messageRef}
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
