export default function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Ahmad Rahman, S.T., M.T.",
      position: "Dekan Fakultas Teknik",
      expertise: "Teknik Informatika, Sistem Informasi",
      bio: "Dosen dengan pengalaman lebih dari 15 tahun di bidang teknologi informasi dan pengembangan perangkat lunak."
    },
    {
      name: "Prof. Dr. Siti Nurhaliza, M.Pd.",
      position: "Dekan Fakultas Ilmu Sosial dan Humaniora",
      expertise: "Ilmu Komunikasi, Media Studies",
      bio: "Ahli komunikasi dengan fokus pada media digital dan jurnalistik modern."
    },
    {
      name: "Dr. Budi Santoso, S.E., M.M.",
      position: "Dekan Fakultas Ekonomi dan Bisnis",
      expertise: "Manajemen Bisnis, Ekonomi",
      bio: "Pakar ekonomi dengan pengalaman konsultasi di berbagai perusahaan nasional."
    },
    {
      name: "Dr. dr. Maya Sari, Sp.PD.",
      position: "Dekan Fakultas Kedokteran",
      expertise: "Kedokteran Umum, Kesehatan Masyarakat",
      bio: "Dokter spesialis dengan dedikasi tinggi pada pendidikan medis dan kesehatan masyarakat."
    },
    {
      name: "Ir. Hendro Wibowo, M.Sc.",
      position: "Dosen Senior Teknik Sipil",
      expertise: "Struktur Bangunan, Teknik Konstruksi",
      bio: "Insinyur dengan pengalaman proyek konstruksi skala besar di Indonesia."
    },
    {
      name: "Dra. Linda Kusuma, M.Hum.",
      position: "Dosen Sastra Inggris",
      expertise: "Sastra Inggris, Linguistik",
      bio: "Peneliti sastra dengan publikasi internasional di bidang linguistik terapan."
    }
  ];

  return (
    <div className="faculty-page py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dosen dan Staff</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tim pengajar kami terdiri dari para ahli dan profesional yang berkomitmen untuk memberikan pendidikan
          berkualitas tinggi kepada mahasiswa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="faculty-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-blue-600 text-center font-medium mb-3">{member.position}</p>
              <p className="text-sm text-gray-500 text-center mb-3">Keahlian: {member.expertise}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="join-faculty bg-blue-50 p-8 rounded-lg text-center flex-1">
            <h2 className="text-2xl font-semibold mb-4">Bergabung dengan Kami</h2>
            <p className="text-gray-700 mb-6">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim pengajar kami.
              Jika Anda tertarik untuk berkontribusi pada pendidikan generasi muda, hubungi kami.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Kirim Lamaran
            </button>
          </div>

          <div className="admin-section bg-green-50 p-8 rounded-lg text-center flex-1">
            <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
            <p className="text-gray-700 mb-6">
              Tambahkan dosen baru ke database kampus. Hanya untuk administrator.
            </p>
            <a
              href="/add-faculty"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Tambah Dosen Baru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}