"use client";
import React from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('/image/hero-img.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full">

          {/* Yellow Title */}
          <h1 className="inline-block bg-yellow-400 text-black px-8 py-8 text-5xl md:text-8xl font-extrabold mb-6">
            Plumbing
          </h1>

          {/* Subtitle */}
          <h2 className="text-white font-extrabold  md:text-4xl mb-8">
            Enter your zipcode for a local plumber
          </h2>

          {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch 
  bg-white 
  rounded-full 
  border-4 border-yellow-400 
  overflow-hidden 
  shadow-lg 
  mb-6">

  <input
    type="text"
    placeholder="City or Zip Code"
    className="flex-1 
      px-8 py-4 
      text-3xl font-extrabold 
      outline-none 
      text-gray-700 
      rounded-l-full"
  />

  <button className="bg-yellow-400 
    text-black 
    font-bold 
    px-8 py-6 
    text-xl 
    hover:bg-yellow-300 
    transition 
    rounded-r-full">

    <div className="flex flex-col leading-tight">
      <span className="text-2xl font-semibold">
        Find the plumber
      </span>
      <span className="text-sm font-semibold">
        Click here to find plumber
      </span>
    </div>

  </button>
</div>


          {/* Red Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full text-3xl transition">
            Plumber? Update Your Profile!
          </button>
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section className="w-full bg-white py-20 px-6 md:px-16">

        {/* ===== Top 4 Image Features ===== */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 mb-20">

          {[
            { small: "The Experts", big: "Our Plumbers" },
            { small: "One Stop", big: "Call or Click" },
            { small: "On Time", big: "High Quality Plumbing" },
            { small: "Our Goal", big: "100% Happy Customers" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <Image
                src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
                alt={item.big}
                width={70}
                height={70}
                className="object-contain"
              />
              <div>
                <p className="text-sm text-black">{item.small}</p>
                <p className="font-bold text-black text-lg">{item.big}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
      {/* ================= third SECTION ================= */}
 <div className="w-full max-w-3xl bg-white rounded-2xl border border-black shadow-sm  py-6 flex flex-col md:flex-row gap-6">

 

      {/* Content Section */}
     <div className="max-w-5xl mx-auto bg-white border-2xl py-4 px-4 border-black rounded p-12 flex justify-center items-center gap-6 shadow-sm">

  {/* Left Image */}
  <div className="w-30 h-16 flex items-center justify-center mt-115 bg-white rounded-4xl border border-gray-600">
    <img
      src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
      alt="Plumber"
      className="w-42 h-24 object-contain"
    />
  </div>

  {/* Right Content */}
  <div className="flex-1">

    {/* Top Row */}
    <div className="flex justify-between items-start flex-wrap gap-8">
      <h2 className="text-3xl font-bold text-black">
        FuturePlumbing experts
      </h2>

      <a
        href="#"
        className="text-black font-semibold  underline hover:text-gray-600"
      >
        View Profile
      </a>
    </div>

    {/* Info Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  text-sm">

      <div>
        <p className="font-bold text-lg text-black">City</p>
        <p className="text-gray-700">Myrtle Beach</p>
      </div>

      <div>
        <p className="font-bold text-lg text-black">Street Address</p>
        <p className="text-gray-700">634 Tall Oaks Lane</p>
      </div>

      <div className="md:col-span-2">
        <p className="font-bold text-xl text-black">Description :</p>
        <p className="text-gray-700 ">
          Dreamers of being the experts we want to be but never will
          because plumbing is not up our alley.
        </p>
      </div>

    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-2">

      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition shadow-sm">
        Send Message
      </button>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-red-600 text-lg font-bold px-6 py-2 rounded-full flex items-center gap-2 transition shadow-md">
        Call this Plumber
        <FaPhone size={18} />
      </button>

      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition shadow-sm">
        Request a Quote
      </button>

    </div>

  </div>
</div>

    </div>

    </>
      );
      }
    
