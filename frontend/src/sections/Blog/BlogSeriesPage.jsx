import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import api from "@/lib/axios";

const BlogSeriesPage = () => {
  const { seriesName } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [seriesInfo, setSeriesInfo] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // get all the posts
        const res = await api.get("/posts");
        const decodedParam = decodeURIComponent(seriesName)
          .trim()
          .toLowerCase();

        // get the list of all sub blogs of a series
        const filtered = res.data
          .filter(
            (post) =>
              post.seriesName?.trim().toLowerCase() === decodedParam &&
              !post.isSeries,
          )
          .sort((a, b) => a.chapter - b.chapter);
        setPosts(filtered);

        // get the series folder
        const info = res.data.find(
          (post) =>
            post.seriesName?.trim().toLowerCase() === decodedParam &&
            post.isSeries === true,
        );
        setSeriesInfo(info);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [seriesName]);

  // loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-368 mx-auto pb-20 flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 scroll-mt-20">
        {/* Title Section */}
        <div className="flex-1">
          <header className="mb-15">
            <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-4 tracking-tight">
              {seriesName}
            </h1>
            <div className="h-1 w-12 bg-text-button"></div>
          </header>

          {/* Simple List */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Link
                key={post._id}
                to={`/blog/${post._id}`}
                className="group block"
              >
                <div className="flex items-start gap-4">
                  {/* Index Number */}
                  <span className="text-sm font-mono text-text-muted/80 pt-0.5">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-xl text-text-main group-hover:text-text-button transition-colors inline-block relative pb-1">
                      {post.title}
                      {/* Minimal Underline Effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-text-button transition-all duration-300 group-hover:w-full"></span>
                    </h2>

                    <p className="mt-1 text-text-muted/80 text-sm line-clamp-2 leading-relaxed max-w-xl">
                      {post.excerpt}
                    </p>

                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted/80">
                      {post.readTime} • {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Side Bar for series information */}
        <aside className="lg:w-100 lg:mt-0 mt-10 space-y-8">
          <div className="sticky top-20 p-6 rounded-2xl border border-text-main/20 bg-bg-surface/10">
            <h3 className="text-text-main font-bold mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-text-button" /> About Series
            </h3>

            {/* Display the excerpt of the series */}
            <p className="text-text-muted/80 text-sm leading-relaxed mb-6 italic">
              {seriesInfo?.excerpt ||
                `A collection of articles covering ${seriesName}.`}
            </p>

            <div className="space-y-3 pt-4 border-t border-text-main/20">
              <div className="flex justify-between text-xs">
                <span className="text-text-muted/80 uppercase tracking-tighter">
                  Total Articles
                </span>
                <span className="text-text-button font-mono font-bold">
                  {posts.length}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-text-muted/80 uppercase tracking-tighter">
                  Last Published
                </span>
                <span className="text-text-main font-medium">
                  {/* get the day of the newest post */}
                  {posts.length > 0
                    ? posts[posts.length - 1].date
                    : seriesInfo?.date || "N/A"}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-text-muted/80 uppercase tracking-tighter">
                  Category
                </span>
                <span className="text-text-button px-2 py-0.5 bg-text-button/10 rounded text-[10px] font-bold">
                  {seriesInfo?.category || "General"}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogSeriesPage;
