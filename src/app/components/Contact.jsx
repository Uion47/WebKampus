"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with backend later)
    console.log("Form submitted:", formData);
    alert("Terima kasih telah menghubungi kami! Kami akan segera merespons.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>
          Hubungi <span>Kami</span>
        </h2>
        <p className="contact-desc">
          Memiliki pertanyaan? Kami senang mendengar dari Anda. Kirimkan pesan
          kepada kami.
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Informasi Kontak</h3>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <p className="info-title">Alamat</p>
                <p>
                  Jl. Cokro Aminoto No. 123, Pinrang, Sulawesi Selatan 91200
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <p className="info-title">Telepon</p>
                <p>(0421) 123456</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <p className="info-title">Email</p>
                <p>info@cokroaminoto.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">⏰</span>
              <div>
                <p className="info-title">Jam Operasional</p>
                <p>Senin - Jumat: 10:00 - 22:00</p>
                <p>Sabtu - Minggu: 11:00 - 23:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Kirim Pesan</h3>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Nomor Telepon"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
