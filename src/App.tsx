import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import 'swiper/swiper-bundle.css';
import { useEffect } from "react";
import MovieDetails from "./components/pages/MovieDetails";
const App = () => {
  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
      if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
          document.body.style.overflow = "auto"; // Allow scroll
        } else {
          document.body.requestFullscreen();
          document.body.style.overflow = "auto";
          document.body.style.scrollbarWidth="none"
        }
      } else if (e.key === "Escape") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
          document.body.style.overflow = "auto"; // Allow scroll back
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Make sure scroll is always reset
    };
  }, []);
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<MovieDetails />} path="/movie/:id" />
      </Routes>
    </Layout>
  )
}

export default App
