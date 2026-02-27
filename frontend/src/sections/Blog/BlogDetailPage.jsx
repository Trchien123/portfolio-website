import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BlogComment from '@/components/BlogComment';
import api from '@/lib/axios';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        // get post by id
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Post not found:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon"></div>
      </div>
    );
  }

  if (!post) return <div className="text-white text-center pt-32">Post not found</div>;
  
  // Get 2 recommendations
  const recommendedPosts = [];

  return (
    <div className="min-h-screen bg-bg-main pt-28">
      <div className="max-w-368 py-5 mx-auto pb-20 px-4 md:px-6 lg:px-8 scroll-mt-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Post Content */}
            <div className="lg:col-span-8"  data-aos="fade-up">
                <article>
                    {/* Header */}
                    <div className="mb-8 space-y-4">
                        <span className="text-xs font-bold text-navy bg-neon px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-text-main leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-text-muted/60 border-b border-text-main/10 pb-8">
                            <span className="flex items-center gap-2"><Calendar size={16}/> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={16}/> {post.readTime}</span>
                            <span className="hidden md:flex items-center gap-2"><User size={16}/>Huynh Trung Chien</span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full h-64 md:h-100 rounded-2xl overflow-hidden mb-12 border border-text-main/10">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Markdown Content */}
                    <div className="markdown-content text-text-muted/90 text-lg leading-relaxed space-y-6">
                        <ReactMarkdown
                            components={{
                                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-text-main mt-10 mb-4" {...props} />,
                                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-text-button mt-8 mb-4 border-l-4 border-text-button pl-4" {...props} />,
                                p: ({node, ...props}) => <p className="mb-6 text-base" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc text-base list-inside mb-6 space-y-2 marker:text-text-button" {...props} />,
                                strong: ({node, ...props}) => <strong className="text-text-main font-bold" {...props} />,
                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                    <div className="rounded-xl overflow-hidden my-8 border border-text-main/10 shadow-2xl">
                                        <div className="bg-[#282a36] px-4 py-2 text-xs text-text-main/50 flex justify-between font-mono border-b border-text-main/5">
                                            <span>{match[1].toUpperCase()}</span>
                                        </div>
                                        <SyntaxHighlighter
                                            style={dracula}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{ margin: 0, borderRadius: 0 }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    </div>
                                    ) : (
                                    <code className="bg-white/10 text-text-button px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
                                        {children}
                                    </code>
                                    )
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Comments */}
                    <BlogComment />
                </article>
            </div>


            {/* Recommended Blogs */}
            <aside className="hidden lg:block lg:col-span-4"  data-aos="fade-up" data-aos-delay={100}>
                <div className="sticky top-32 space-y-8">
                    
                    <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2 border-l-4 border-neon pl-3">
                         Recommended
                    </h3>

                    <p>Under Construction....</p>

                    <div className="flex flex-col gap-6">
                        {recommendedPosts.map((recPost) => (
                            <div 
                                key={recPost.id}
                                onClick={() => navigate(`/blog/${recPost.id}`)}
                                className="group cursor-pointer bg-bg-surface/30 border border-text-main/5 rounded-xl overflow-hidden hover:border-text-button/50 transition-all duration-300 shadow-lg"
                            >
                                {/* Sidebar Card Image */}
                                <div className="h-40 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-bg-main/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img 
                                        src={recPost.image} 
                                        alt={recPost.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Category Overlay */}
                                    <div className="absolute top-3 left-3 z-20">
                                        <span className="text-[12px] font-bold text-navy bg-neon px-2 py-1 rounded-full">
                                            {recPost.category}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Sidebar Card Content */}
                                <div className="p-5">
                                    <h4 className="text-xl font-bold text-text-main mb-3 group-hover:text-text-button transition-colors leading-snug">
                                        {recPost.title}
                                    </h4>
                                    <div className="flex items-center justify-between text-sm text-text-muted/50">
                                        <span>{recPost.date}</span>
                                        <span className="flex items-center gap-1 text-text-main">
                                            Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;