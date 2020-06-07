import React, { useEffect, useState } from "react";
import "./App.css";

import Movie from "./Movie";

export default function App() {
  const key = "97f1bd616b51e07825e04a855aaeed30";

  // useStates
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("king");

  useEffect(() => {
    getData();
  }, [query]);
  const getData = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
    );
    const dataCom = await data.json();
    setMovies(dataCom.results);
  };

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getQuery}>
        <input type="text" value={search} onChange={getInput} />
        <button type="submit">button</button>
      </form>
      <div className="movie">
        {movies.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
}
