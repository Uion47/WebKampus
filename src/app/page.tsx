import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Placeholder for campus building image - in real implementation, add background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Universitas Cokro<br />
            <span className="text-yellow-400">Aminoto Pinrang</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Institusi pendidikan tinggi yang berkomitmen pada excellence akademik, inovasi, dan pengembangan karakter untuk membentuk generasi pemimpin masa depan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/about" className="bg-yellow-500 text-blue-900 px-10 py-4 rounded-none font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg uppercase tracking-wide">
              Tentang Kami
            </Link>
            <Link href="/programs" className="border-2 border-white text-white px-10 py-4 rounded-none font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 uppercase tracking-wide">
              Program Studi
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="overview py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900 border-l-4 border-yellow-500 pl-6">Excellence in Education</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Universitas Cokro Aminoto Pinrang berdiri sebagai institusi pendidikan tinggi terkemuka yang berkomitmen pada pengembangan akademik, penelitian inovatif, dan pengabdian kepada masyarakat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan kurikulum yang terintegrasi dan tenaga pengajar berkualitas, kami mempersiapkan mahasiswa untuk menjadi pemimpin di berbagai bidang profesional.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="border-r border-gray-200 pr-8">
                  <div className="text-4xl font-bold text-blue-900 mb-2">40+</div>
                  <div className="text-gray-600 uppercase text-sm tracking-wide">Tahun Berkarya</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-900 mb-2">15K+</div>
                  <div className="text-gray-600 uppercase text-sm tracking-wide">Alumni Sukses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900 uppercase tracking-wide">Komitmen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="feature-card text-center group">
              <div className="w-20 h-20 bg-blue-900 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900 uppercase tracking-wide">Akademik Unggul</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Program studi berkualitas internasional dengan kurikulum terintegrasi dan pengembangan kompetensi holistik.</p>
              <Link href="/programs" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-900 hover:text-white transition-colors duration-300">Program Studi</Link>
            </div>
            <div className="feature-card text-center group">
              <div className="w-20 h-20 bg-blue-900 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900 uppercase tracking-wide">Dosen Ahli</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Tenaga pengajar dengan kredensial akademik tinggi dan pengalaman profesional yang luas di berbagai bidang.</p>
              <Link href="/faculty" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-900 hover:text-white transition-colors duration-300">Tim Pengajar</Link>
            </div>
            <div className="feature-card text-center group">
              <div className="w-20 h-20 bg-blue-900 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900 uppercase tracking-wide">Penelitian</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Pusat penelitian terdepan dengan fokus pada inovasi dan kontribusi nyata bagi kemajuan ilmu pengetahuan.</p>
              <Link href="/news" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-900 hover:text-white transition-colors duration-300">Berita & Acara</Link>
            </div>
            <div className="feature-card text-center group">
              <div className="w-20 h-20 bg-blue-900 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900 uppercase tracking-wide">Layanan</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Komitmen penuh terhadap kepuasan mahasiswa dengan layanan administrasi dan fasilitas yang prima.</p>
              <Link href="/contact" className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 font-bold uppercase tracking-wide hover:bg-blue-900 hover:text-white transition-colors duration-300">Hubungi Kami</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 uppercase tracking-wide">Pencapaian Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="w-24 h-24 bg-yellow-500 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-blue-900 transition-colors duration-300">
                <svg className="w-12 h-12 text-blue-900 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-6xl font-bold mb-4 text-yellow-400">5,000+</h3>
              <p className="text-lg uppercase tracking-wide opacity-90">Mahasiswa Aktif</p>
            </div>
            <div className="group">
              <div className="w-24 h-24 bg-yellow-500 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-blue-900 transition-colors duration-300">
                <svg className="w-12 h-12 text-blue-900 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-6xl font-bold mb-4 text-yellow-400">50+</h3>
              <p className="text-lg uppercase tracking-wide opacity-90">Program Studi</p>
            </div>
            <div className="group">
              <div className="w-24 h-24 bg-yellow-500 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-blue-900 transition-colors duration-300">
                <svg className="w-12 h-12 text-blue-900 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m2 0h1.586a1 1 0 01.707.293l.707.707A1 1 0 0021 12.414V15m0 2v1.586a1 1 0 01-.293.707l-.707.707A1 1 0 0019 19.414V21m-2 0h-1.586a1 1 0 01-.707-.293l-.707-.707A1 1 0 0014 19H12m-2 0H9.586a1 1 0 01-.707-.293l-.707-.707A1 1 0 018 17.586V15m0-2V9.586a1 1 0 01.293-.707l.707-.707A1 1 0 019.414 8H12" />
                </svg>
              </div>
              <h3 className="text-6xl font-bold mb-4 text-yellow-400">200+</h3>
              <p className="text-lg uppercase tracking-wide opacity-90">Dosen & Staff</p>
            </div>
            <div className="group">
              <div className="w-24 h-24 bg-yellow-500 rounded-none flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-blue-900 transition-colors duration-300">
                <svg className="w-12 h-12 text-blue-900 group-hover:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-6xl font-bold mb-4 text-yellow-400">40+</h3>
              <p className="text-lg uppercase tracking-wide opacity-90">Tahun Berkarya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
