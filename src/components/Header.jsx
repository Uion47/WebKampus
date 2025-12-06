"use client";
import React, { useEffect, useState } from "react";
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

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        {/* <div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div> */}
        <a href="#" className="navbar-logo">
          Cokro Aminoto <span>Pinrang</span>
        </a>

        {/* Menu */}
        <div className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Kontak</a>
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
