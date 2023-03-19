import React from "react";
import { Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      <div>
        {props.list.map((movie) => (
          <span key={movie.id} className="saved-movie">
            {movie.title}
          </span>
        ))}
      </div>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
