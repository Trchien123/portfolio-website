import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SheetFrame from "./components/drawing/SheetFrame";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About/About";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog/Blog";
import Contact from "./sections/Contact";
import Chatbot from "./sections/Chatbot";
// Blog pages load on demand: Markdown, KaTeX and the code highlighter stay
// out of the home page bundle.
const BlogListPage = lazy(() => import("./sections/Blog/BlogListPage"));
const BlogDetailPage = lazy(() => import("./sections/Blog/BlogDetailPage"));
const BlogSeriesPage = lazy(() => import("./sections/Blog/BlogSeriesPage"));
import AdminPage from "./sections/AdminPage";


function SiteLayout({ footer = true }) {
  return (
    <div className="p-2 md:p-5">
      <SheetFrame>
        <SiteHeader />
        <main id="main">
          <Suspense fallback={<p className="min-h-96 px-4 py-20 font-mono text-sm text-muted md:px-10">Loading…</p>}>
            <Outlet />
          </Suspense>
        </main>
        {footer ? <SiteFooter /> : null}
      </SheetFrame>
      <Chatbot />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Project />
      <Experience />
      <About />
      <Skill />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/blog/series/:seriesName" element={<BlogSeriesPage />} />
        </Route>
        <Route element={<SiteLayout footer={false} />}>
          <Route path="/chien-admin-secret" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
