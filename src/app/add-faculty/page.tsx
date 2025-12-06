"use client";
import { useState } from "react";

export default function AddFaculty() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    expertise: "",
    bio: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log("Faculty data:", formData);
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        position: "",
        expertise: "",
        bio: "",
        email: "",
        phone: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="add-faculty-page py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tambah Dosen Baru</h1>
        <p className="text-center text-gray-600 mb-12">
          Masukkan informasi dosen baru untuk ditambahkan ke database kampus.
        </p>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Data dosen berhasil ditambahkan!
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                Jabatan *
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Contoh: Dosen Senior Teknik Informatika"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
              Keahlian *
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Contoh: Teknik Informatika, Sistem Informasi"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="email@ucap.ac.id"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+62 8xx-xxxx-xxxx"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
              Biografi *
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Deskripsikan latar belakang, pengalaman, dan pencapaian dosen..."
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Tambah Dosen
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <a
            href="/faculty"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Kembali ke Halaman Dosen
          </a>
        </div>
      </div>
    </div>
  );
}