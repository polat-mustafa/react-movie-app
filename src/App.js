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
    <div>
      <Header />
      <Body movies={data.items} />
      <Footer />
      <ReactQueryDevtools />
    </div>
  );
}

export default App;
