import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nfrdye5', 'template_6x2qy4a', form.current, {
        publicKey: 'lVhAAfoSHUbeKsICT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="md:w-[50%]">
      <div className="md:flex mt-10 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-[#abb2bf] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl mb-5 w-full placeholder:text-white md:w-1/2 light:placeholder:text-[#1e2228]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-[#abb2bf] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl mb-5 w-full placeholder:text-white md:w-1/2 light:placeholder:text-[#1e2228]"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="border border-[#abb2bf] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl mb-5 w-full placeholder:text-white light:placeholder:text-[#1e2228]"
      />

      <textarea
        name="message"
        placeholder="Message"
        className="border border-[#abb2bf] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl mb-5 w-full h-25 placeholder:text-white light:placeholder:text-[#1e2228]"
      />
      <button
        type="submit"
        className="border border-[#7ec0ee] text-white light:text-[#1e2228] px-2 py-1 md:text-lg lg:text-xl hover:bg-[#7ec0ee]/30 hover:cursor-pointer transition-all duration-300"
        value="Send"
      >
        Send Message
      </button>
    </form >
  );
};

export default ContactForm;