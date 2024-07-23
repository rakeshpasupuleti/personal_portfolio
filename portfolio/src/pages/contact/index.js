import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaMobileAlt,FaHandshake  } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import emailjs from "emailjs-com";

emailjs.init("WtRBgCIh-gmAT7J8R");

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      sendEmail(e);
      // Reset the form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setErrors(validationErrors);
    }
  }

  function validateForm() {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  }

  function sendEmail(e) {
    const form = e.target;
    emailjs
      .sendForm(
        "service_zpsyvan",
        "template_1826b34",
        form,
        "WtRBgCIh-gmAT7J8R"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Your message was successfully sent!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert(
            "There was an issue sending your message. Please try again later."
          );
        }
      );
  }

  return (
    <div className="flex flex-row gap-10 h-11/12 w-11/12 p-5 overflow-y-scroll:hide">
      {/* Left half: Social Media */}
      <div className="w-4/12 flex flex-col items-center  text-white m-5 pt-7 ">
        <div className="flex flex-row ">
        <h1 className="text-5xl mb-8 ">Let's Connect</h1><FaHandshake  className="text-6xl  ml-4  mb-8 "/>
        </div>
        <div className="socialmedia flex flex-col gap-5 items-left">
          <a href="tel:7167047640" className="flex items-center gap-2 text-2xl">
            <FaMobileAlt className="text-3xl hover:cursor-pointer" />
            716-704-7640
          </a>
          <a
            href="mailto:rakeshpasupuleti550@gmail.com"
            className="flex items-center gap-2 text-2xl"
          >
            <TfiEmail className="text-3xl hover:cursor-pointer" />
            rakeshpasupuleti550@gmail.com
          </a>
          <a
            href="https://github.com/rakeshpasupuleti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl"
          >
            <FaGithub className="text-3xl hover:cursor-pointer" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rakeshpasupuleti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl"
          >
            <FaLinkedin className="text-3xl hover:cursor-pointer" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/rakesh_pasupuleti27/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-2xl"
          >
            <FaInstagram className="text-3xl hover:cursor-pointer" />
            Instagram
          </a>
        </div>
      </div>

      {/* Right half: Contact Form */}
      <div className="w-1/2 flex flex-col items-center text-white m-5 pt-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 w-full max-w-md"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="from_name"
              value={name}
              placeholder="Enter Your Name..."
              onChange={(event) => setName(event.target.value)}
              className="p-2 rounded text-black bg-white"
            />
            {errors.name && (
              <span className="text-white-500">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="from_email"
              value={email}
              placeholder="Enter Your Email..."
              onChange={(event) => setEmail(event.target.value)}
              className="p-2 rounded text-black bg-white"
            />
            {errors.email && (
              <span className="text-white-500">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-2 rounded text-black bg-white"
            />
            {errors.subject && (
              <span className="text-white-500">{errors.subject}</span>
            )}
          </label>
          <label className="flex flex-col">
            <textarea
              name="message"
              value={message}
              placeholder="Enter Your Message..."
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded h-32 text-black bg-white resize-none"
            />
            {errors.message && (
              <span className="text-white-500">{errors.message}</span>
            )}
          </label>
          <button
            type="submit"
            className="bg-gray-600 text-white p-2 rounded mt-4 hover:bg-gray-700"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
