import React from "react";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";

const Body = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <Link to={`/movie/${movie.id}`}>
            <Movies movie={movie} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
