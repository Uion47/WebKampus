"use client";
import React, { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  function openModal(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <section id="home" className="hero">
      <main className="content">
        <h1>
          Mari Berkembang Bersama<span> Cokro</span>
        </h1>
        <p>
          Nikmati fasilitas belajar modern dan lingkungan kampus yang nyaman.
          Universitas kami menawarkan berbagai program unggulan. Siap mendukung
          perjalanan akademik Anda.
        </p>
        <a href="#" className="cta" onClick={openModal}>
          Daftar Sekarang
        </a>

        {showModal && (
          <div className="modal-overlay" role="dialog" aria-modal="true">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                aria-label="Tutup"
                onClick={closeModal}
              >
                ×
              </button>
              <h3>Pemberitahuan</h3>
              <p>Pendaftaran belum dibuka.</p>
              <div className="modal-actions">
                <button className="cta" onClick={closeModal}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
