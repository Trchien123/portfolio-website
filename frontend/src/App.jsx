import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SheetFrame from "./components/drawing/SheetFrame";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About/About";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Blog from "./sections/Blog/Blog";
import Contact from "./sections/Contact";
import Chatbot from "./sections/Chatbot";
import BlogListPage from "./sections/Blog/BlogListPage";
import BlogDetailPage from "./sections/Blog/BlogDetailPage";
import BlogSeriesPage from "./sections/Blog/BlogSeriesPage";
import AdminPage from "./sections/AdminPage";


function SiteLayout({ footer = true }) {
  return (
    <div className="p-2 md:p-5">
      <SheetFrame>
        <SiteHeader />
        <main id="main">
          <Outlet />
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
