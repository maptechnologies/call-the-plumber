import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
  
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
    PRICING PLAN
  </h1>
</section>

{/* ================= TEXT SECTION ================= */}
<section className="bg-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center space-y-8">

    <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">
      Look At Our Limited Pricing Plans
    </h2>

    <p className="text-gray-700 text-lg">
      Our mission is to help anyone find a local plumber in 2 clicks or less.
    </p>

    <p className="text-gray-700 text-lg">
      One thing’s for sure, anyone seeking a plumber does so at no cost, to them, ever.
    </p>

    <p className="text-gray-700 text-lg">
      Plumbers can be listed in respective zip codes at no charge.
    </p>

    <p className="text-gray-700 text-lg">
      We do charge plumbers if they want to advertise and promote their companies.
      Additional advertising on SERPs page right side is ball game for advertising.
    </p>

    <p className="text-gray-700 text-lg font-semibold">
      Without plumbers we have no purpose.
    </p>

  </div>
</section>


{/* ================= PRICING CARDS ================= */}
    <div className="min-h-screen bg-white flex items-center justify-center p-6 mb-5">
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">

        {/* Card 1 */}
        <div className="bg-yellow-400 rounded-lg p-8 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-extrabold text-center mt-4 text-black">
            Free listing Of all plumbers
          </h2>

          <h1 className="text-5xl font-bold text-black text-center mt-6">Free</h1>

          <ul className="space-y-3 mb-8 text-black text-lg">
            <li>✔ Your own website page Your own company URL address.</li>
            <li>✔ When your zip code is searched be in top 4 plumbers to show first.</li>
            <li>✔ No contracts</li>
            <li>✔ Sign up as a new plumber.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-400 rounded-lg p-8 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-extrabold text-black text-center mt-4">
            Free to all seekers of plumbers
          </h2>

          <h1 className="text-5xl font-bold text-black text-center mt-6">Free</h1>

          <ul className="space-y-3 text-black text-lg">
            <li>✔ In 1 click you can see four local plumbers.</li>
            <li>✔ Click on your choice and get direct contact.</li>
            <li>✔ Be on top of the list, be the one to get the call.</li>
            <li>✔ Get phone calls in one single click.</li>
            <li>✔ Get good reviews from customers with your awesome work.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-400 rounded-lg p-8 shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-extrabold text-black text-center mt-4">
            Registered Plumber
          </h2>

          <h1 className="text-5xl font-bold text-black text-center mt-6">$99</h1>

          <ul className="space-y-3 text-black text-lg">
            <li>✔ Your own company URL address</li>
            <li>✔ Your own company webpage in ultimate directory</li>
            <li>✔ Always be first in zip code searches</li>
            <li>✔ Toll free number calls directly to you</li>
            <li>✔ Advertise your logo in 2 places on website</li>
          </ul>
        </div>

      </div>
    </div>
    </main>
  );
}
