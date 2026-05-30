import React from "react";

// Här definierar jag en typ (props) för varje nyhetsartikel
interface NewsCardProps {
  image?: string;
  title: string | JSX.Element; // Ändra här
  category: string;
  date?: string;
}

function NewsCard({ image, title, category, date }: NewsCardProps) {
  return (
    <div className="news-card" style={{ backgroundColor: "black" }}>
      {/* Bild för nyhetsartikeln */}
      <img src={image} />

      {/* Rubrik för nyhetsartikeln */}
      <h2>{title}</h2>

      {/* Kategori (t.ex. FASTIGHETSRÄTT) */}
      <p className="category">{category}</p>

      {/* Publiceringsdatum för nyhetsartikeln */}
      <p className="date">{date}</p>
    </div>
  );
}

export default NewsCard;
