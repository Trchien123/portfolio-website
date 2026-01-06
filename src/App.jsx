import './index.css';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About/About.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import Skill from './sections/Skill.jsx';
import Project from './sections/Project.jsx';
import Blog from './sections/Blog/Blog.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetailPage from './sections/Blog/BlogDetailPage';
import BlogListPage from './sections/Blog/BlogListPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-linear-to-r from-navy via-navy to-dusk">
        {/* Header */}
        <Header/>

        <Routes>
          {/* Main Path */}
          <Route path="/" element={
            <main>
              <Hero/>
              <About/>
              <Skill/>
              <Project/>
              <Blog/>
            </main>
          }/>

          {/* Blog List Page */}
          <Route path="/blog" element={<BlogListPage />} />

          {/* Blog Detail Page*/}
          <Route path="/blog/:id" element={<BlogDetailPage />} />

        </Routes>
      </div>
    </Router>

  )
};
export default App;
