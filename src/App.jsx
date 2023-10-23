import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieMain from "./pages/MovieMain";
import MovieOverview from "./pages/MovieOverview";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieMain />} />
        <Route path="/overview/:id" element={<MovieOverview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
