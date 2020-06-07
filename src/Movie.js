import React from "react";

const Movie = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
      />
    </div>
  );
};

export default Movie;
