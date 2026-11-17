import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import DimensionLine from "@/components/drawing/DimensionLine";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import { useReveal } from "@/lib/useReveal";

const CATEGORIES = ["All", "Others", "Computer Vision", "Web Development", "ML/DL", "Maths", "Software Architecture"];

const postHref = (post) => (post.isSeries ? `/blog/series/${post.seriesName}` : `/blog/${post._id}`);

function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const headRef = useReveal({ immediate: true });

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setIsLoading(false));
  }, []);

  // Only single posts and series folders appear, never series chapters.
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const isVisibleInList = !post.seriesName || post.isSeries === true;
    return matchesSearch && matchesCategory && isVisibleInList;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div className="px-4 py-14 md:px-10 md:py-20">
      <header ref={headRef} className="mb-10">
        <DimensionLine label="Sheet 2 · writing" className="mb-6 max-w-lg" />
        <h1 className="rv-wipe pb-descender text-6xl leading-display tracking-tightest md:text-8xl">Technical notes</h1>
        <p className="rv-up mt-5 max-w-prose text-lg leading-relaxed" style={{ "--d": "0.3s" }}>
          Insights on Artificial Intelligence, Software Engineering, and my learning journey.
        </p>
      </header>

      <div className="mb-8 grid gap-4 border-2 border-line p-4 md:grid-cols-[minmax(16rem,24rem)_1fr] md:items-center">
        {/* reason (grid-cols): search box keeps a readable width beside the filters */}
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-muted" size={18} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search articles (e.g., 'YOLO', 'React')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-12 w-full border-2 border-line bg-sheet pr-3 pl-10 text-ink placeholder:text-muted"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={selectedCategory === cat ? "primary" : "secondary"}
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {isLoading ? <p className="font-mono text-sm text-muted">Loading notes…</p> : null}

      {!isLoading && filteredPosts.length === 0 ? (
        <div className="border-2 border-dashed border-line p-10">
          <p className="text-2xl font-black text-ink">No articles found</p>
          <p className="mt-2">Try adjusting your search or category filter.</p>
          <Button variant="secondary" className="mt-6" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      ) : null}

      {filteredPosts.length ? (
        <ol className="border-t-2 border-line">
          {filteredPosts.map((post, i) => (
            <li key={post._id} className="group relative grid gap-2 border-b border-line py-6 transition-colors duration-200 hover:bg-faint md:grid-cols-[4rem_9rem_1fr_13rem] md:items-baseline md:gap-6 md:px-2">
              <span className="font-mono text-sm text-dim">N-{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-sm text-muted">{post.isSeries ? "Series" : post.date}</span>
              <div>
                <h2 className="text-2xl leading-tight tracking-tight">
                  <Link to={postHref(post)} className="card-link group-hover:text-dim">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-2 max-w-prose leading-relaxed">{post.excerpt}</p>
              </div>
              <span className="font-mono text-sm tracking-wider text-muted uppercase md:text-right">
                {post.category}
                <span className="block normal-case">{post.isSeries ? post.readTime || "Series" : post.readTime}</span>
              </span>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}

export default BlogListPage;
