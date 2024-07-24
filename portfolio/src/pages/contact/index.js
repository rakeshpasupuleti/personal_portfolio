import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaMobileAlt, FaHandshake } from "react-icons/fa";
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
    <div className="flex flex-col lg:flex-row gap-10 p-5 w-full max-w-screen-xl mx-auto bg-gray-800 text-white">
      {/* Left half: Social Media */}
      <div className="flex flex-col items-center p-10 m-5 lg:items-start text-white w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="flex items-center mb-6 ">
          <h1 className="text-4xl lg:text-5xl font-bold mr-4">Let's Connect</h1>
          <FaHandshake className="text-5xl lg:text-6xl" />
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <a href="tel:7167047640" className="flex items-center gap-2">
            <FaMobileAlt className="text-3xl hover:text-blue-400" />
            716-704-7640
          </a>
          <a
            href="mailto:rakeshpasupuleti550@gmail.com"
            className="flex items-center gap-2"
          >
            <TfiEmail className="text-3xl hover:text-blue-400" />
            rakeshpasupuleti550@gmail.com
          </a>
          <a
            href="https://github.com/rakeshpasupuleti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub className="text-3xl hover:text-blue-400" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rakeshpasupuleti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaLinkedin className="text-3xl hover:text-blue-400" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/rakesh_pasupuleti27/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram className="text-3xl hover:text-blue-400" />
            Instagram
          </a>
        </div>
      </div>

      {/* Right half: Contact Form */}
      <div className="w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-700 p-6 rounded-lg w-full max-w-md mx-auto"
        >
          <label className="flex flex-col">
            <input
              type="text"
              name="from_name"
              value={name}
              placeholder="Enter Your Name..."
              onChange={(event) => setName(event.target.value)}
              className="p-3 rounded text-black bg-white"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <input
              type="email"
              name="from_email"
              value={email}
              placeholder="Enter Your Email..."
              onChange={(event) => setEmail(event.target.value)}
              className="p-3 rounded text-black bg-white"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-3 rounded text-black bg-white"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject}</span>
            )}
          </label>
          <label className="flex flex-col">
            <textarea
              name="message"
              value={message}
              placeholder="Enter Your Message..."
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 rounded h-32 text-black bg-white resize-none"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </label>
          <button
            type="submit"
            className="bg-gray-600 text-white p-3 rounded hover:bg-gray-700"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}
