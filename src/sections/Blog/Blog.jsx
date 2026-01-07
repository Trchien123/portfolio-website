import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ExternalLink, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Button from '@/components/Button';

const Blog = () => {
  const navigate = useNavigate();

  // MOCK DATA
  const posts = [
    {
      id: 1,
      title: "Building an Anti-Spoofing Face ID System",
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
      excerpt: "A deep dive into how I implemented liveness detection using OpenCV and PyTorch to prevent photo attacks.",
      date: "Jan 05, 2026",
      readTime: "8 min read",
      tags: ["Computer Vision", "Security", "Deep Learning"],
      slug: "anti-spoofing-face-id"
    },
    {
      id: 2,
      title: "Optimizing YOLOv8 for Edge Devices",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Techniques I learned to make object detection models run faster on Raspberry Pi without losing accuracy.",
      date: "Dec 22, 2025",
      readTime: "5 min read",
      tags: ["Edge AI", "Optimization"],
      slug: "optimizing-yolov8"
    },
    {
      id: 3,
      title: "Why I Learned React as an AI Engineer",
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
      excerpt: "Frontend skills are underrated for Data Scientists. Here is how building UI helps me showcase my models better. ",
      date: "Nov 15, 2025",
      readTime: "4 min read",
      tags: ["Career", "Web Dev"],
      slug: "react-for-ai"
    }
  ];

  // Handle when the post is clicked
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Handle when view all is clicked
  const handleViewAll = () => {
    navigate('/blog');
  };

  return (
    <section  
      id="blogs"
      className="w-full max-w-368 mx-auto pb-20 md:pb-40 px-4 md:px-6 lg:px-8 scroll-mt-20"
    >
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4" data-aos="fade-up">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-muted mb-4 flex items-center gap-3">
            <BookOpen className="text-text-button" size={40} />
            Blogs
          </h2>
          <p className="text-text-muted/70 text-md max-w-2xl">
            Sharing my journey in <span className="text-text-button font-bold">Artificial Intelligence</span> and <span className="text-text-muted font-bold">Software Development</span>.
          </p>
        </div>

        {/* Desktop View All Button */}
        <Button
          onClick={handleViewAll}
          variant='outline'
        >
          View All Posts 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Blog */}
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post, index) => (
          <article 
            key={post.id} 
            className="group cursor-pointer bg-bg-main/30 border border-text-main/10 rounded-2xl flex flex-col md:flex-row hover:border-text-button/50 hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden h-auto md:h-52"
            onClick={() => handlePostClick(post.id)} // When the users click on the blog, move to the blog page.
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
          >
            {/* Left Image on the Blog */}
            <div className="w-full h-48 md:w-[35%] md:h-full relative overflow-hidden">
              <img 
                src={post.src} 
                alt="Chien"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg-main/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Main content */}
            <div className="group w-full flex flex-col p-5">

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-text-button/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Tag and Date */}
              <div>
                {/* Tag */}
                <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {post.tags.map((tag, idx) => ( 
                            <span key={idx} className="text-sm font-mono font-bold text-text-button bg-text-button/10 px-2 py-0.5 rounded border border-text-button/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Date */}
                    <div className="flex items-center gap-3 text-sm text-text-muted/50 relative z-10">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-xl font-bold text-text-main mb-2 group-hover:text-text-button transition-colors line-clamp-2 relative z-10">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-muted/70 text-base line-clamp-3 leading-relaxed relative z-10">
                    {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4 text-sm text-text-muted/50 mt-auto border-t border-text-main/10 pt-4 relative z-10">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-text-button/70"/> 
                  {post.readTime}
                </span>
                {/* The Link Button */}
                <a 
                    className="flex items-center gap-2 text-sm font-bold text-text-main group-hover:text-text-button transition-colors w-fit group/link"
                >
                    View Blog
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 4. MOBILE VIEW ALL BUTTONN*/}
      <div className="mt-10 flex justify-center md:hidden">
        <Button
          onClick={handleViewAll}
          variant="outline"
        >
          View All Posts 
          <ArrowRight size={18} />
        </Button>
      </div>

    </section>
  );
};

export default Blog;