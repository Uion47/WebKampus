export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang Universitas Cokro Aminoto Pinrang</h1>
          <p className="text-xl opacity-90">Pusat Pendidikan Tinggi Unggul di Indonesia</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Mengenal Kami Lebih Dalam</h2>

        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">Sejarah Kami</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
            Universitas Cokro Aminoto Pinrang didirikan pada tahun 1980 dengan visi menjadi pusat pendidikan tinggi yang unggul di Indonesia.
            Sejak awal berdirinya, kami telah berkomitmen untuk memberikan pendidikan berkualitas dan membentuk karakter mahasiswa yang berintegritas.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Dengan dukungan dari pemerintah daerah dan masyarakat, universitas ini telah berkembang menjadi institusi yang diakui secara nasional
            dan internasional, dengan fokus pada inovasi, penelitian, dan pengabdian kepada masyarakat.
          </p>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">Visi dan Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Visi</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Menjadi universitas terkemuka yang menghasilkan lulusan berkualitas tinggi, inovatif, dan berkontribusi pada pembangunan bangsa.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">Misi</h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 text-lg">
                <li>Menyelenggarakan pendidikan tinggi yang berkualitas dan relevan dengan kebutuhan masyarakat</li>
                <li>Mengembangkan penelitian yang inovatif dan bermanfaat bagi kemajuan ilmu pengetahuan</li>
                <li>Melakukan pengabdian kepada masyarakat melalui berbagai program sosial dan edukasi</li>
                <li>Membangun kerjasama dengan institusi dalam dan luar negeri untuk meningkatkan kualitas pendidikan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Pencapaian Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600 dark:text-gray-300">Tahun Pengalaman</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Alumni Sukses</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Dosen Berkualitas</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Program Studi</div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2 text-center">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-200">Integritas</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap aspek kegiatan.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-800 dark:text-orange-200">Inovasi</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Kami mendorong kreativitas dan inovasi untuk menghadapi tantangan masa depan.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">K</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-800 dark:text-teal-200">Kolaborasi</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Kami percaya bahwa kerja sama adalah kunci untuk mencapai kesuksesan bersama.</p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2 text-center">Pimpinan Universitas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-4xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Dr. Rektor Universitas</h3>
              <p className="text-gray-600 dark:text-gray-300">Memimpin dengan visi dan integritas</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-4xl font-bold">W</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Dr. Wakil Rektor Akademik</h3>
              <p className="text-gray-600 dark:text-gray-300">Mewujudkan excellence in education</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-4xl font-bold">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Dr. Dekan Fakultas</h3>
              <p className="text-gray-600 dark:text-gray-300">Mendorong inovasi dan penelitian</p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">Fasilitas Kampus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Fasilitas Akademik</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-lg">
                <li>• Perpustakaan digital dengan koleksi lengkap</li>
                <li>• Laboratorium canggih untuk berbagai disiplin ilmu</li>
                <li>• Gedung kuliah yang nyaman dan modern</li>
                <li>• Ruang seminar dan konferensi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Fasilitas Pendukung</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-lg">
                <li>• Asrama mahasiswa dengan fasilitas lengkap</li>
                <li>• Kantin dan kafe dengan menu sehat</li>
                <li>• Area olahraga dan rekreasi</li>
                <li>• Layanan kesehatan dan konseling</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 text-lg">
            Semua fasilitas dirancang untuk memastikan kenyamanan, keselamatan, dan pengalaman belajar yang optimal bagi seluruh civitas akademika.
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Kami</h2>
          <p className="text-xl mb-6 opacity-90">Jadilah bagian dari komunitas akademik yang berkomitmen pada excellence dan inovasi.</p>
          <div className="space-x-4">
            <a href="/programs" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Lihat Program Studi</a>
            <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Hubungi Kami</a>
          </div>
        </section>
      </div>
    </div>
  );
}