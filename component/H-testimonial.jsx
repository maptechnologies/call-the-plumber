"use client";
import React from "react";

const testimonials = [
  {
    name: "Mary Jane Smith",
    role: "Homeowner",
    image: "/image/5a3d3fac37ae3dabb94267771ab319d6.png",
    text: "We just loved our plumber so much my husband wanted to beat the crap out of him but didn’t because he was so happy with our sink installation.",
    rating: 3,
  },
  {
    name: "Grace Kelly",
    role: "Co Founder",
    image: "/image/1c65f1d9d92b084e30ff72ffaefe3b04.png",
    text: "It was a river of water shooting out from our new tub that my husband completed before going into hospital and I had to wrap a towel around to slow down the water and Bob the plumber showed up and saved the day.",
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-17 px-6 bg-white md:px-12 max-w-[1500px] mx-auto">
      {/* Top Logos/Images */}
      <div className="flex justify-between items-center mb-12">
        <img
          src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
          alt="Left Logo"
          className="w-24 md:w-52 mr-26 "
        />
        <div className="text-center">
          <p className="text-lg text-black mb-2">What Client Says</p>
          <h2 className="text-3xl md:text-4xl text-black font-semibold mb-2">Testimonials</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We just loved our plumber so much my husband wanted to beat the crap
            out of him but didn’t because he was so happy with our sink
            installation.
          </p>
        </div>
        <img
          src="/image/5as1c56.png"
          alt="Right Image"
          className="w-24 md:w-52"
        />
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="border border-yellow-600 rounded-lg p-7 flex flex-col md:flex-row items-start gap-4 hover:bg-yellow-400 transition-shadow duration-300 bg-white"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-30 h-30 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-700 mb-2">{t.text}</p>
              <h3 className="font-bold text-black text-lg">{t.name}</h3>
              <p className="text-gray-700 text-sm mb-2">{t.role}</p>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    🐝
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;