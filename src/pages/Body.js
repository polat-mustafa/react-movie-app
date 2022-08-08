import React from "react";

const Body = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
