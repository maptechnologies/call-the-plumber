"use client";

export default function HomeCareSection() {
  return (
    <section
      className="relative w-full h-[450px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('image/4ec87ac079103a2c542505ae0f1aa5e9.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6 max-w-4xl">

        <p className="text-2xl md:text-3xl font-medium">
          We Treat Your Home
        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold mt-3">
          Like Our Home
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          We pride ourselves on being neat and clean. Your satisfaction and
          peace of mind is our top priority.
        </p>

        <button className="mt-8 bg-yellow-400 hover:bg-white transition px-8 py-3 rounded-full text-black font-semibold text-lg">
          Contact Us
        </button>

      </div>
    </section>
  );
}