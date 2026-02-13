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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-yellow-400 rounded-2xl shadow-2xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl text-gray-800 font-semibold mb-2">
              Free listing Of all plumbers
            </h3>
            <h2 className="text-4xl font-bold mb-6">Free</h2>
            <ul className="space-y-3 text-left text-sm">
              <li>✔Your own website page Your own company URL address.</li>
              <li>✔ When your zip code is searched be in top 4 plumbers to show first.</li>
              <li>✔ No contracts</li>
              <li>✔ Sign up as new plumber</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-400 rounded-lg shadow-xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">
              Free to all seekers of plumbers
            </h3>
            <h2 className="text-4xl font-bold mb-6">Free</h2>
            <ul className="space-y-3 text-left text-sm">
              <li>✔In 1 click you can see four local plumbers Click on your choice, callthisplumber and your put in direct contact with that plumber.</li>
              <li>✔ Be on top of the list, be the one to get the call.</li>
              <li>✔ Get phone calls in one single click.</li>
              <li>✔ Get good reviews from customers with your awesome work.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-400 rounded-lg shadow-xl p-8 text-center hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Registered Plumber
            </h3>
            <h2 className="text-4xl font-bold mb-6">$99</h2>
            <ul className="space-y-3 text-left text-sm">
              <li>✔ Your own company URL address</li>
              <li>✔ Your own company webpage in the ultimate plumber directory. Tell your story and let seekers of a good plumber know about you</li>
              <li>✔ Always be first up in all searches of your zip code. Let people know your available day or night.</li>
              <li>✔ OurToll free number calls you directly as top rated in your zip. Advertise your Logo in 2 different places on website</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
