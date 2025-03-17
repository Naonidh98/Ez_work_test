import React, { useState } from "react";

import logo from "../assets/logo.png";
import data from "../assets/data.png";
import pres from "../assets/pres.png";
import graphics from "../assets/graphic.png";
import research from "../assets/research2.png";
import trans from "../assets/trans.png";
import audio from "../assets/audio.png";

import toast from "react-hot-toast";

const services = [
  { title: "Presentation Design", icon: pres },
  { title: "Audio - Visual Production", icon: audio },
  { title: "Translation Services", icon: trans },
  { title: "Graphic Design", icon: graphics },
  { title: "Research & Analytics", icon: research },
  { title: "Data Processing", icon: data },
];

const Contact = () => {
  const [email, setEmail] = useState("");

  async function postData(email) {
    const toastId = toast.loading("Loading....");

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      toast.success("Success");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed");
    }

    toast.dismiss(toastId);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    postData(email);
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 bg-white  rounded-lg">
        <div className="p-6 sm:w-2/5 w-full text-center sm:text-left">
          <img
            src={logo}
            className="w-3/5 sm:w-1/2 mx-auto sm:mx-0"
            loading="lazy"
            alt="logo"
          />

          <h2 className="text-2xl text-gray-800 mt-4 font-semibold">
            Suite Of Business Support Services
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </p>
          <form
            className="mt-6 flex flex-col sm:flex-row gap-2 w-full"
            onSubmit={submitHandler}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full sm:w-auto flex-1"
            />
            <button className="bg-[#EA7B2C] text-white px-4 py-2 rounded-md w-full sm:w-auto">
              Contact Me
            </button>
          </form>
        </div>

        <div className="p-6 sm:w-3/5 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mt-6 sm:mt-0">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#112949] text-white p-4 rounded-lg flex flex-col items-center text-center sm:text-left "
            >
              <h3 className="text-lg font-semibold flex items-center gap-3">
                <img src={service.icon} alt="icon" className="w-8 h-8" />
                {service.title}
              </h3>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
