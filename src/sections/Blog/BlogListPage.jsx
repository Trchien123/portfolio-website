import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowLeft, ArrowRight, Filter, BookOpen } from 'lucide-react';
import Button from '@/components/Button';

// 1. MOCK DATA
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building an Anti-Spoofing Face ID System",
    excerpt: "A deep dive into how I implemented liveness detection using OpenCV and PyTorch to prevent photo attacks.",
    date: "Jan 05, 2026",
    readTime: "8 min read",
    category: "AI Engineering",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Optimizing YOLOv8 for Edge Devices",
    excerpt: "Techniques I learned to make object detection models run faster on Raspberry Pi without losing accuracy.",
    date: "Dec 22, 2025",
    readTime: "5 min read",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Why I Learned React as an AI Engineer",
    excerpt: "Frontend skills are underrated for Data Scientists. Here is how building UI helps me showcase my models better.",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Understanding Transformers & Attention",
    excerpt: "Breaking down the 'Attention is All You Need' paper into simple concepts and code snippets.",
    date: "Oct 10, 2025",
    readTime: "12 min read",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "Setting up a Python Environment for AI",
    excerpt: "Conda vs Venv? Docker? My guide to setting up a reproducible machine learning environment.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000"
  },
];

// Defined Categories for the Filter Tabs
const CATEGORIES = ["All", "AI Engineering", "Computer Vision", "Web Development", "Deep Learning", "Tutorials"];

const BlogListPage = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FILTERING LOGIC
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-navy pt-28 pb-20 px-4 animate-fade-in">
      <div className="max-w-352 mx-auto">

        {/* BACK BUTTON */}
        <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-sage/60 hover:text-neon mb-5 transition-colors"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
            Back to Home Page
        </button>

        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-3">
            <BookOpen className="text-neon" size={40} />
            Blogs
          </h1>
          <p className="text-sage/60 text-base max-w-2xl mx-auto">
            Insights on Artificial Intelligence, Software Engineering, and my learning journey.
          </p>
        </div>

        {/* SEARCH & FILTER SECTION */}
        <div className="mb-12 space-y-6">
          
          {/* Search Bar */}
          <div 
            className="relative max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <input 
              type="text" 
              placeholder="Search articles (e.g., 'YOLO', 'React')..." 
              className="w-full bg-navy/50 border border-white/10 rounded-full py-4 px-12 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all placeholder:text-sage/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sage/50" size={20}/>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shadow-none rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === cat 
                    ? "bg-neon text-navy border-neon font-bold hover:bg-neon/90"
                    : "bg-transparent text-sage/70 border-white/10 hover:border-white/30 hover:text-navy"
                }`}
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group h-full" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                <article 
                  className="bg-navy/30 border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col hover:border-neon/50 hover:-translate-y-2 transition-all duration-300 shadow-lg relative"
                >
                  
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge overlay on image */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-xs font-bold text-navy bg-neon px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-sm text-sage/50 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sage/70 text-base mb-6 line-clamp-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-white/5 flex items-center text-neon text-base font-bold gap-2">
                      Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </div>
                  </div>

                </article>
              </Link>
            ))}
          </div>
        ) : (
          /* EMPTY STATE (No results) */
          <div className="text-center py-20 border border-dashed border-white/40 rounded-3xl">
            <Filter size={48} className="mx-auto text-sage/20 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-sage/60">Try adjusting your search or category filter.</p>
            <div className="flex justify-center items-center mt-5">
              <Button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogListPage;