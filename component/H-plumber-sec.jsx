"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#ffffff] py-20 px-6 md:px-20">

      {/* ===== Top 4 Image Features ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">

        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <Image
            src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
            alt="Our Plumbers"
            width={70}
            height={70}
            className="object-contain"
          />
          <div>
            <p className="text-sm text-black">The Experts</p>
            <p className="font-bold  text-black text-lg">Our Plumbers</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <Image
            src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
            alt="Call or Click"
            width={70}
            height={70}
          />
          <div>
            <p className="text-sm text-black">One Stop</p>
            <p className="font-bold text-black text-lg">Call or Click</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <Image
            src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
            alt="High Quality"
            width={70}
            height={70}
          />
          <div>
            <p className="text-sm text-black">On Time</p>
            <p className="font-bold  text-black text-lg">High Quality Plumbing</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4">
          <Image
            src="/image/4fdd85702abbcf41468b22da9a3da9d8.png"
            alt="Happy Customers"
            width={70}
            height={70}
          />
          <div>
            <p className="text-sm text-black">Our Goal</p>
            <p className="font-bold  text-black text-lg">100% Happy Customers</p>
          </div>
        </div>

      </div>

      {/* ===== Main Content Area ===== */}
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <div>
          <h2 className="text-5xl md:text-4xl text-black font-extrabold mb-6">
            We love Plumbers
          </h2>

          <p className="text-gray-700 leading-relaxed mb-7">
            Call the plumber was formed to make it easy for homeowners and
            businesses to find a great plumber. Quickly and without fear, who
            has been vetted by CTP that he’s not a bad guy, but a good guy who
            loves his job Plumbing.
          </p>

          <p className="text-gray-700 leading-relaxed">
            And he will treat you as he would his own family, shows up when he
            says he will, knows what he’s doing and does it promptly doesn’t
            leave a mess and doesn’t make you feel like you have been robbed.
            All of our plumbers are licensees of CTP.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end  ">
          <Image
            src="/image/8df6e6de10a1d10eaab279bda9ddefc1.png"
            alt="Plumber Working"
            width={350}
            height={510}
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}