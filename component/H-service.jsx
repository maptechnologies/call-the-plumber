"use client";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="relative bg-[#ffffff] py-20 px-6 md:px-20 overflow-hidden">

      {/* Left Wrench Image */}
      <div className="hidden md:block absolute left-0 top-10 opacity-40">
        <Image
          src="/image/23sa156c1.png"
          alt="Wrench"
          width={200}
          height={500}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center">

        {/* Top Heading */}
        <p className="text-2xl text-black font-semibold">Call the Plumber</p>

        <h2 className="text-5xl md:text-6xl text-black font-extrabold mt-2">
          Services
        </h2>

        <p className=" mt-4  text-black max-w-4xl mx-auto">
          Check to see what services are available in your zip code.
          Ask the plumber when you speak to him.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/image/919b5ef743165cf20e6a52b41f5f016b.png"
              alt="Bathrooms"
              width={450}
              height={550}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h3 className="text-3xl font-bold mb-4 tracking-wide">
                BATHROOMS
              </h3>
              <p className="text-lg leading-relaxed">
                Consider this, unless you love soaking in a tub, pull it out
                and change it to a five-foot shower complete with extra
                shower heads, a built-in seat, and especially the ease of
                getting in and out of it.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/image/a73df0966f4ae63843390b0d05401a82.png"
              alt="Kitchens"
              width={500}
              height={600}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h3 className="text-3xl font-bold mb-4 tracking-wide">
                KITCHENS
              </h3>
              <p className="text-lg leading-relaxed">
                When doing a kitchen, consider the height of your counters
                and your back, and if you live in colder climate add the
                simple luxury of an instant hot water nozzle.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden">
            <Image
              src="/image/8df6e6de10a1d10eaab279bda9ddefc1.png"
              alt="Septic Issues"
              width={500}
              height={600}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h3 className="text-3xl font-bold mb-4 tracking-wide">
                SEPTIC ISSUES
              </h3>
              <p className="text-lg leading-relaxed">
                When you make contact with the plumber, make sure he also
                handles septic issues, usually there are companies that do
                just that, only septic issues.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}