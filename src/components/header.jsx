"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import feather from "feather-icons";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ⚡ Inisialisasi Feather Icons
  useEffect(() => {
    feather.replace();
  }, []);

  // Set --header-offset CSS variable dynamically based on actual nav height
  const navRef = useRef(null);
  useEffect(() => {
    function setHeaderOffset() {
      if (navRef.current) {
        const h = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-offset", `${h}px`);
      }
    }

    // initial set and on resize
    setHeaderOffset();
    window.addEventListener("resize", setHeaderOffset);
    return () => window.removeEventListener("resize", setHeaderOffset);
  }, []);

  return (
    <header>
      <nav ref={navRef} className="navbar">
        {/* Logo */}
        <div className="navbar-logo-cokro">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <a href="#" className="navbar-logo">
          Cokro Aminoto <span>Pinrang</span>
        </a>

        {/* Menu */}
        <div className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Beranda
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            Tentang Kami
          </a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}>
            Menu
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Kontak
          </a>
        </div>

        {/* Extra */}
        <div className="navbar-extra">
          <a href="#" id="search">
            <i data-feather="search"></i>
          </a>
          <a href="#" id="user">
            <i data-feather="user"></i>
          </a>
          <a
            href="#"
            id="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i data-feather="menu"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
