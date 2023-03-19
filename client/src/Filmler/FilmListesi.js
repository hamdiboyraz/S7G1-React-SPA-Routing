import React from "react";
import { Link } from "react-router-dom";

import FilmCard from "./FilmCard";

export default function FilmListesi({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link
          to={`filmler/${movie.id}`}
          key={movie.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <FilmCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}
