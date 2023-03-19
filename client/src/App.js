import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import axios from "axios";

import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  const FilmleriAl = () => {
    axios
      .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
      .then((res) => {
        // Bu kısmı log statementlarıyla çalışın
        // ve burdan gelen response'u 'movieList' e aktarın
        // console.log(res);
        setMovieList(res.data);
      })
      .catch((error) => {
        console.error("Sunucu Hatası", error);
      });
  };

  useEffect(() => {
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />

      <div>
        {/* <Router>
          <Route path="/" element={<FilmListesi />} />
          <Route path="/filmler/:id" element={<Film />} />
        </Router> */}
        <Switch>
          <Route exact path="/">
            <FilmListesi movies={movieList} />
          </Route>
          <Route exact path="/filmler/:id">
            <Film saved={saved} setSaved={setSaved} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
