"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        
        {/* Background Image */}
        <Image
          src="/image/hero-img.jpg"
          alt="hero banner"
          priority
          height={300}
          width={1000}
          className="object-cover w-full h-auto"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-[6px]">
            TESTIMONIAL
          </h1>
        </div>
      </section>

      {/* Testimonial CTA Section */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-black mb-6">
          Leave us a Testimonial below, Please 🙂
        </h2>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition duration-300">
          ADD A TESTIMONIAL
        </button>
      </section>
    </>
  );
}
