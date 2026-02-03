import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Skill from "./sections/Skill.jsx";
import Project from "./sections/Project.jsx";
import Blog from "./sections/Blog/Blog.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetailPage from "./sections/Blog/BlogDetailPage";
import BlogListPage from "./sections/Blog/BlogListPage";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./sections/Contact";
import SignatureSplash from "./components/SignatureSplash";

function App() {
  // Loading Splash Signature
  const [loading, setLoading] = useState(true);

  // Animation
  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: true,
        anchorPlacement: "top-bottom",
      });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        /* Singature Splash */
        <SignatureSplash onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />

          <div className="min-h-screen">
            {/* Header */}
            <Header />

            <Routes>
              {/* Main Path */}
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <About />
                    <Skill />
                    <Project />
                    <Blog />
                    <Contact />
                  </main>
                }
              />

              {/* Blog List Page */}
              <Route path="/blog" element={<BlogListPage />} />

              {/* Blog Detail Page*/}
              <Route path="/blog/:id" element={<BlogDetailPage />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}
export default App;
