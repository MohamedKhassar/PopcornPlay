import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import 'swiper/swiper-bundle.css';
import { useEffect } from "react";
import MovieDetails from "./components/pages/MovieDetails";
import SerieDetails from "./components/pages/SerieDetails";
import Search from "./components/pages/Search";
const App = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'f' || e.key === 'F') && !pathname.includes("search")) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen()
            .then(() => {
              // Allow scroll in fullscreen
              document.body.style.overflow = 'auto';
              document.documentElement.style.overflow = 'auto';
            })
            .catch(console.error);
        } else {
          document.exitFullscreen()
            .then(() => {
              document.body.style.overflow = 'auto';
              document.documentElement.style.overflow = 'auto';
            })
            .catch(console.error);
        }
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
            .then(() => {
              document.body.style.overflow = 'auto';
              document.documentElement.style.overflow = 'auto';
            })
            .catch(console.error);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [pathname]);
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<MovieDetails />} path="/movie/:id" />
        <Route element={<SerieDetails />} path="/serie/:id" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </Layout>
  )
}

export default App
