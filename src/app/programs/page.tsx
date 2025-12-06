export default function Programs() {
  const programs = [
    {
      faculty: "Fakultas Teknik",
      majors: [
        { name: "Teknik Informatika", description: "Program studi yang fokus pada pengembangan perangkat lunak, jaringan komputer, dan teknologi informasi." },
        { name: "Teknik Sipil", description: "Program studi yang mempelajari perencanaan, pembangunan, dan pemeliharaan infrastruktur." },
        { name: "Teknik Elektro", description: "Program studi yang mencakup elektronika, telekomunikasi, dan sistem tenaga listrik." }
      ]
    },
    {
      faculty: "Fakultas Ekonomi dan Bisnis",
      majors: [
        { name: "Manajemen", description: "Program studi yang mengajarkan prinsip-prinsip manajemen bisnis dan kepemimpinan." },
        { name: "Akuntansi", description: "Program studi yang fokus pada pelaporan keuangan, audit, dan analisis bisnis." },
        { name: "Ekonomi Pembangunan", description: "Program studi yang mempelajari teori ekonomi dan aplikasinya dalam pembangunan." }
      ]
    },
    {
      faculty: "Fakultas Ilmu Sosial dan Humaniora",
      majors: [
        { name: "Ilmu Komunikasi", description: "Program studi yang mengajarkan teori komunikasi, media, dan jurnalistik." },
        { name: "Ilmu Administrasi Negara", description: "Program studi yang fokus pada administrasi pemerintah dan kebijakan publik." },
        { name: "Sastra Inggris", description: "Program studi yang mempelajari bahasa, sastra, dan budaya Inggris." }
      ]
    },
    {
      faculty: "Fakultas Kedokteran",
      majors: [
        { name: "Pendidikan Dokter", description: "Program studi untuk menjadi dokter umum dengan kurikulum berbasis kompetensi." },
        { name: "Keperawatan", description: "Program studi yang mempersiapkan mahasiswa menjadi perawat profesional." }
      ]
    }
  ];

  return (
    <div className="programs-page py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Program Studi</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Universitas Cokro Aminoto Pinrang menawarkan berbagai program studi yang dirancang untuk mempersiapkan mahasiswa
          menghadapi tantangan dunia kerja dan berkontribusi pada masyarakat.
        </p>

        {programs.map((faculty, index) => (
          <div key={index} className="faculty-section mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">{faculty.faculty}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.majors.map((major, idx) => (
                <div key={idx} className="major-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">{major.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{major.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="admission-info bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Informasi Pendaftaran</h2>
          <p className="text-gray-700 mb-6">
            Untuk informasi lebih lanjut tentang persyaratan pendaftaran, jadwal, dan proses seleksi,
            silakan hubungi bagian admissions kami.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}