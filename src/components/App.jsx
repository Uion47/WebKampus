"use client";
import { useState } from "react";

export default function HeaderButton() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active); // mengubah state
  };

  return (
    <button
      onClick={toggleActive}
      className={`my-btn ${active ? "active" : ""}`}
    >
      Tekan Saya
    </button>
  );
}
