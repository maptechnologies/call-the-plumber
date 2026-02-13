"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <img
            src="/image/plumberlogo3.png"
            alt="Call The Plumber"
            className="w-48 mb-6"
          />
          <p className="mb-4">
            Marketing & Advertising Specialists for the Plumbing Industry.
          </p>
          <p className="mb-4">The Ultimate Plumber directory.</p>
          <p className="mb-4">Contact a plumber in 2 clicks or less.</p>
          <p>Owned & operated by an Air Force Veteran.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Navigation
          </h3>
          <ul className="space-y-3">
            <li>Home</li>
            <li>Plumbers</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Contact Us
          </h3>
          <p className="mb-3">📧 service@calltheplumber.com</p>
          <p className="mb-3">📞 855-767-5500 – For Plumbers</p>
          <p className="mb-5">📞 570-454-2900 – For Licensing</p>

          <div className="flex space-x-4 mt-4">
            <div className="bg-blue-600 p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-blue-400 p-2 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-pink-600 p-2 rounded-full">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-yellow-400 font-semibold text-lg mb-4">
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-full bg-transparent border border-gray-500 mb-4 focus:outline-none"
          />

          <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-black text-center py-4">
        ©2026 Call the Plumber – All rights reserved. v4
      </div>
    </footer>
  );
}
