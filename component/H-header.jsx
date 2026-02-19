"use client";
import { useState } from "react";
import Head from "next/head";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Call The Plumber</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>

      {/* Top Bar */}
     <div style={{ backgroundColor: "#FFD500", padding: "5px 0" }}>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 35px",
      minHeight: "60px",
    }}
  >
    {/* Left Section */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{
          marginRight: "15px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Follow Us:
      </span>

      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ background: "#1877F2", padding: "8px", borderRadius: "50%", color: "white", cursor: "pointer" }}>
          <FaFacebookF />
        </div>

        <div style={{ background: "#1DA1F2", padding: "8px", borderRadius: "50%", color: "white", cursor: "pointer" }}>
          <FaTwitter />
        </div>

        <div style={{ background: "#E1306C", padding: "8px", borderRadius: "50%", color: "white", cursor: "pointer" }}>
          <FaInstagram />
        </div>
      </div>
    </div>

    {/* Center Text */}
    <div
      style={{
        color: "red",
        fontWeight: "bold",
        fontSize: "18px",
        textAlign: "center",
        flex: 1,
      }}
    >
      Plumbers bridge the gap between civility and chaos
    </div>

    {/* Right Section */}
    <div>
      <select
        style={{
          padding: "5px 10px",
          // borderRadius: "4px",
          border: "1px solid gray",
          color:"black",
        }}
      >
        <option>🇺🇸 English</option>
        <option>🇵🇰 Urdu</option>
      </select>
    </div>
  </div>
</div>


      {/* Navbar */}
      <div style={{ backgroundColor: "#fff", borderBottom: "2px solid #ccc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px",  }}>
          
          {/* Logo */}
          <div>
            <a href="/">
              <img src="/image/plumberlogo3.png" alt="Call the Plumber" style={{ height: "110px" }} />
            </a>
          </div>

          {/* Menu */}
          <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0, padding: 0, fontWeight: "semibold", text:"2xl",  }}>
            <li><a href="/" style={{ textDecoration: "none", color: "#000" }}>Home</a></li>
            <li><a href="/plumber" style={{ textDecoration: "none", color: "#000" }}>plumber</a></li>
            <li><a href="/testimonial" style={{ textDecoration: "none", color: "#000" }}>Testimonial</a></li>
            <li><a href="/pricing" style={{ textDecoration: "none", color: "#000" }}>pricing</a></li>
            <li><a href="/contact" style={{ textDecoration: "none", color: "#000" }}>Contact</a></li>
          </ul>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="/log_in" style={{ backgroundColor: "#FFD500", padding: "8px 15px", borderRadius: "25px", textDecoration: "none", color: "#000", fontWeight: "bold" }}>Plumber login</a>
            <a href="/plumber_create" style={{ backgroundColor: "#FFD500", padding: "8px 15px", borderRadius: "25px", textDecoration: "none", color: "#000", fontWeight: "bold" }}>Plumber create a Profile</a>
          </div>
        </div>
      </div>
    </>
  );
}
