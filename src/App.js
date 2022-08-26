import React from "react";
// ROUTER
import { Route, Routes, BrowserRouter } from "react-router-dom";
// PAGES
import Body from "./pages/Body";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// REACT QUERY DEVTOOLS
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./api/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Movies from "./components/Movies";
import MoviesDetail from "./components/MoviesDetail";

function App() {
  // Queries
  const { data, error, isLoading } = useQuery(["movies"], getMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body movies={data.items} />} />
          <Route path="/movie" element={<Movies movies={data.items} />} />
          <Route path="/movie/:id" element={<MoviesDetail movies={data.items} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
