"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('/image/e64c45318dde5308774f4fd48078f1de.jpg')",
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
          <h2 className="text-white font-extrabold text-xl md:text-4xl mb-8">
            Enter your zipcode for a local plumber
          </h2>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-full overflow-hidden shadow-lg mb-6">
            <input
              type="text"
              placeholder="City or Zip Code"
              className="flex-1 px-6 py-6 text-2xl font-extrabold outline-none text-black"
            />
            <button className="bg-yellow-400 text-black font-bold px-6 py-8 text-2xl hover:bg-yellow-300 transition">
              Find the plumber<br/>
              <span className="text-sm font-samibold">Click Here to find the plumber</span>
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
   <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

  {/* LEFT SIDE */}
  <div className="lg:col-span-2 space-y-8">

    {[
      {
        name: "FuturePlumbing Experts",
        city: "Myrtle Beach",
        address: "634 Tall Oaks Lane",
        desc: "Residential & Commercial plumbing services with trusted quality and fast response time.",
      },
      {
        name: "CK Smith & Company",
        city: "Worcester",
        address: "53 Harlow St.",
        desc: "Professional plumbing solutions for homes and offices.",
      },
      {
        name: "D Lou Plumbing",
        city: "Uxbridge",
        address: "35 High St.",
        desc: "Reliable plumbing experts serving your area with care.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-3xl p-7 flex gap-8"
      >
        {/* Logo Box */}
        <div className="w-[130px] h-[130px] rounded-3xl bg-yellow-100 flex items-center justify-center group-hover:scale-105 transition">
          <div className="relative w-[95px] h-[95px]">
            <Image
              src="/plumber.png"
              alt="plumber"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-800">
              {item.name}
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View Profile →
            </a>
          </div>

          {/* Info Row */}
          <div className="flex gap-10 mt-3 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">City</p>
              <p>{item.city}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Street Address</p>
              <p>{item.address}</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">

            <button className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm font-semibold">
              Send Message
            </button>

            <button className="px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition text-sm font-bold text-red-600 flex items-center gap-2">
              Call this Plumber
              <span>📞</span>
            </button>

            <button className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-black transition text-sm font-semibold">
              Request a Quote
            </button>

          </div>
        </div>
      </div>
    ))}

    {/* Modern Pagination */}
    <div className="flex justify-center gap-3 mt-8">
      <button className="w-10 h-10 rounded-full bg-yellow-400 font-semibold">
        1
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100">
        2
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100">
        3
      </button>
      <button className="px-4 rounded-full border border-gray-300 hover:bg-gray-100">
        Next →
      </button>
    </div>

  </div>

  {/* RIGHT SIDE MODERN CARD */}
  <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-200 h-fit">

    <p className="text-black text-sm leading-relaxed mb-5">
      While you were gone, I installed the dog door we talked about.
      No need to thank me!
    </p>

    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
      <Image
        src="/dog.jpg"
        alt="dog"
        fill
        className="object-cover hover:scale-105 transition duration-300"
      />
    </div>

  </div>

</div>

    </>
  );
}
