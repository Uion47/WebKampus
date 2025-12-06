export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Pembukaan Program Beasiswa Unggulan 2024",
      date: "15 Desember 2024",
      category: "Pengumuman",
      excerpt: "Universitas membuka program beasiswa unggulan untuk mahasiswa berprestasi dengan potongan biaya kuliah hingga 50%.",
      content: "Program beasiswa ini ditujukan untuk mahasiswa baru yang memiliki prestasi akademik dan non-akademik yang luar biasa..."
    },
    {
      id: 2,
      title: "Seminar Nasional Teknologi Informasi",
      date: "20 Desember 2024",
      category: "Acara",
      excerpt: "Fakultas Teknik menyelenggarakan seminar nasional dengan tema 'Digital Transformation in Industry 4.0'.",
      content: "Seminar ini akan menghadirkan pembicara dari berbagai universitas ternama dan praktisi industri..."
    },
    {
      id: 3,
      title: "Wisuda Periode II Tahun 2024",
      date: "10 November 2024",
      category: "Acara",
      excerpt: "Lebih dari 500 mahasiswa akan diwisuda dalam acara yang akan dilaksanakan di auditorium utama kampus.",
      content: "Wisuda kali ini menandai kelulusan mahasiswa dari berbagai fakultas dengan predikat cum laude..."
    },
    {
      id: 4,
      title: "Kerjasama dengan Universitas Terdepan",
      date: "5 November 2024",
      category: "Berita",
      excerpt: "Universitas Cokro Aminoto Pinrang menjalin kerjasama dengan universitas di Eropa untuk program pertukaran mahasiswa.",
      content: "Kerjasama ini mencakup program pertukaran mahasiswa, joint research, dan pengembangan kurikulum bersama..."
    },
    {
      id: 5,
      title: "Pemenang Kompetisi Robotik Nasional",
      date: "25 Oktober 2024",
      category: "Prestasi",
      excerpt: "Tim mahasiswa Teknik Informatika berhasil meraih juara 1 dalam kompetisi robotik tingkat nasional.",
      content: "Tim yang terdiri dari 5 mahasiswa ini berhasil mengalahkan 50 tim lainnya dari seluruh Indonesia..."
    },
    {
      id: 6,
      title: "Pembukaan Laboratorium Baru",
      date: "15 Oktober 2024",
      category: "Fasilitas",
      excerpt: "Fakultas Kedokteran meresmikan laboratorium modern untuk praktikum mahasiswa.",
      content: "Laboratorium ini dilengkapi dengan peralatan canggih untuk mendukung pembelajaran praktis mahasiswa kedokteran..."
    }
  ];

  return (
    <div className="news-page py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Berita & Acara</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tetap update dengan informasi terkini tentang kegiatan kampus, pengumuman penting,
          dan prestasi mahasiswa serta dosen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 cursor-pointer">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
              <button className="text-blue-600 hover:underline font-medium">
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>

        <div className="newsletter-signup bg-gray-50 p-8 rounded-lg text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Berlangganan Newsletter</h2>
          <p className="text-gray-700 mb-6">
            Dapatkan update berita dan acara kampus langsung ke email Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}