import { MailIcon, Phone, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center">
  
  <Image
    src="/image/hero-img.jpg"
    alt="Hero Background"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Title */}
  <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold tracking-widest">
   CONTACT
  </h1>
</section>

 <div className="w-10 bg-yellow-400 py-16  mt-30">
      <div className="max-w-6xl mx-auto px-6  grid md:grid-cols-2 gap-10 text-center">

        {/* Phone Section */}
        <div className="flex flex-col items-center space-y-4">
          <PhoneIcon size={50} className="text-black" />

          <h2 className="text-xl font-semibold">Phone Number</h2>

          <p className="text-lg">
            855-767-5500 – For Plumbers
          </p>

          <p className="text-lg">
            570-454-2900 – For Licensing
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center space-y-4">
          <MailIcon size={50} className="text-black" />

          <h2 className="text-xl font-semibold">Email Address</h2>

          <p className="text-lg">
            service@calltheplumber.com
          </p>
        </div>

      </div>
    </div>

   <div className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-black font-bold text-center mb-12 tracking-wide">
          SEND US A MESSAGE
        </h2>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-400 p-2 bg-transparent text-black focus:outline-none focus:border-black transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-400 p-2 mt-4 bg-transparent text-black focus:outline-none focus:border-black transition"
          />

          {/* Subject */}
          <input
            type="text"
            placeholder="Your Subject"
            className="w-full border border-gray-400 p-2 mt-4  bg-transparent text-black focus:outline-none focus:border-black transition"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border border-gray-400 p-4 mt-4  bg-transparent text-black focus:outline-none focus:border-black transition resize-none"
          ></textarea>

          {/* Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-full transition duration-300"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div> 
    </main>
  );
}
