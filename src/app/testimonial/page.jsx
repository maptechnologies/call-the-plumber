"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="w-full">

      {/* ===== Top Banner ===== */}
      <div className="relative w-full h-75 md:h-105">
        
        {/* Background Image */}
        <Image
          src="/image/hero-img.jpg"
          alt="testimonial banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Center Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-[6px]">
            TESTIMONIAL
          </h1>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Leave us a Testimonial below, Please 🙂
        </h2>

        <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 px-10 py-4 rounded-full font-bold text-black shadow-md hover:scale-105">
          ADD A TESTIMONIAL
        </button>
      </div>

    </section>
  );
}
