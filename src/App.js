// ROUTER
import { Route, Routes, BrowserRouter } from "react-router-dom";
// PAGES
import Body from "./pages/Body";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// REACT QUERY DEVTOOLS
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "react-query";
import { getAllMovies } from "./api/index";

function App() {

  const { error, isLoading, data } = useQuery("movies", getAllMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body data={data} />} />
          </Routes>
          <Footer />
          <ReactQueryDevtools />
        </BrowserRouter>
    </div>
  );
}

export default App;
