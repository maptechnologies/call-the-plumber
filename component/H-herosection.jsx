"use client";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[650px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/e64c45318dde5308774f4fd48078f1de.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 text-center w-full max-w-6xl px-4">

        {/* Main Heading */}
        <h1 className="flex flex-wrap items-center justify-center text-6xl md:text-8xl font-extrabold tracking-tight">
          
          <span className="bg-yellow-400 text-black px-8 py-8 mr-4">
            Plumbing
          </span>

          <span className="text-white">
            Services
          </span>

        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-2xl md:text-5xl text-gray-200 font-large font-bold ">
          Enter Your zipcode for a local plumber
        </p>

        {/* Search Box */}
        <div className="mt-12 flex justify-center">

          <div className="flex w-full max-w-3xl bg-white rounded-full overflow-hidden shadow-2xl">

            <input
              type="text"
              placeholder="City Or Zip Code"
              className="flex-1 px-8 py-8 text-2xl text-black outline-none font-extrabold"
            />

            <button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 px-10 text-red-600 font-bold text-2xl">
              Click here to <br/>find the plumber
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}