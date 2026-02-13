"use client";
import { useState } from "react";
import Head from "next/head";

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
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "20px", alignItems: "center", padding: "0 35px", minHeight: "60px"}}>
          {/* Left: Social */}
          <div>
            <span style={{ marginRight: "10px", fontWeight: "bold"  }}>Follow us:</span>
            <a href="#" style={{ marginRight: "5px", color: "#1877F2" }}><i className="fa fa-facebook"></i></a>
            <a href="#" style={{ marginRight: "5px", color: "#1DA1F2" }}><i className="fa fa-twitter"></i></a>
            <a href="#" style={{ color: "#E4405F" }}><i className="fa fa-instagram"></i></a>
          </div>

          {/* Right: Text */}
          <div style={{ color: "red", fontWeight: "bold", marginLeft:"299px", }}>
            Plumbers bridge the gap between civility and chaos
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
          <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0,  }}>
            <li><a href="/" style={{ textDecoration: "none", color: "#000" }}>Home</a></li>
            <li><a href="/plumber" style={{ textDecoration: "none", color: "#000" }}>plumber</a></li>
            <li><a href="/testimonial" style={{ textDecoration: "none", color: "#000" }}>Testimonial</a></li>
            <li><a href="/pricing" style={{ textDecoration: "none", color: "#000" }}>pricing</a></li>
            <li><a href="/contact_us" style={{ textDecoration: "none", color: "#000" }}>Contact</a></li>
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
