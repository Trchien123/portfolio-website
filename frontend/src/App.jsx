import "./index.css";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect, useState } from "react";
import Skill from "./sections/Skill.jsx";
import Project from "./sections/Project.jsx";
import Blog from "./sections/Blog/Blog.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetailPage from "./sections/Blog/BlogDetailPage";
import BlogListPage from "./sections/Blog/BlogListPage";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./sections/Contact";
import SignatureSplash from "./components/SignatureSplash";
import AdminPage from "./sections/AdminPage";
import BlogSeriesPage from './sections/Blog/BlogSeriesPage.jsx';
import Chatbot from "./sections/Chatbot";

// DEV ONLY: design-system preview, not included in production builds.
const DesignPreview = import.meta.env.DEV ? lazy(() => import("./dev/DesignPreview.jsx")) : null;
const isPreviewRoute = () => DesignPreview !== null && window.location.pathname === "/__design";

function App() {
  // Loading Splash Signature
  const [loading, setLoading] = useState(() => !isPreviewRoute());

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

          <Routes>
            {DesignPreview ? (
              <Route
                path="/__design"
                element={
                  <Suspense fallback={null}>
                    <DesignPreview />
                  </Suspense>
                }
              />
            ) : null}
            <Route path="*" element={
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
              
              {/* Blog Series Page */}
              <Route path="/blog/series/:seriesName" element={<BlogSeriesPage />} />
              
              {/* Admin Page*/}
              <Route path="/chien-admin-secret" element={<AdminPage />} />
            </Routes>
            
            <Chatbot />
            
          </div>
            } />
          </Routes>
        </Router>
      )}
    </>
  );
}
export default App;
