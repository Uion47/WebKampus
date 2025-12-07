"use client";

export default function Menu() {
  const menuItems = [
    {
      name: "Nasi Goreng Spesial",
      description: "Nasi goreng dengan bumbu khas dan lauk lengkap",
      price: "Rp 45.000",
      icon: "🍚",
    },
    {
      name: "Ayam Goreng Kampung",
      description: "Ayam goreng renyah dengan sambal matah",
      price: "Rp 55.000",
      icon: "🍗",
    },
    {
      name: "Ikan Bakar Madura",
      description: "Ikan segar dipanggang dengan bumbu tradisional",
      price: "Rp 65.000",
      icon: "🐟",
    },
    {
      name: "Soto Ayam Premium",
      description: "Kuah tradisional dengan daging ayam pilihan",
      price: "Rp 35.000",
      icon: "🍲",
    },
    {
      name: "Rendang Daging",
      description: "Daging sapi dalam kuah santan yang kaya rasa",
      price: "Rp 75.000",
      icon: "🥘",
    },
    {
      name: "Lumpia Goreng",
      description: "Lumpia renyah dengan dipping sauce spesial",
      price: "Rp 25.000",
      icon: "🌯",
    },
  ];

  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <h2>
          Menu <span>Pilihan</span>
        </h2>
        <p className="menu-desc">
          Koleksi hidangan terbaik kami yang siap memanjakan lidah Anda
        </p>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card">
              <div className="menu-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
