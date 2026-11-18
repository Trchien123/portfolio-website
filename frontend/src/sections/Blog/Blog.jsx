import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/drawing/SectionHeading";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import Reveal from "@/components/drawing/Reveal";

const postHref = (post) => (post.isSeries ? `/blog/series/${encodeURIComponent(post.seriesName)}` : `/blog/${post._id}`);

// Only single posts and series folders appear in lists, never series chapters.
const isListed = (post) => !post.seriesName || post.isSeries === true;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data.slice(0, 3)))
      .catch((err) => console.error("Error when getting post:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const listed = posts.filter(isListed);

  return (
    <section id="blogs" aria-labelledby="blogs-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="blogs-title" title="Writing" note={"Technical notes\nAI · web · maths"} />

      <div>
        {isLoading ? <p className="font-mono text-sm text-muted">Loading notes…</p> : null}
        {!isLoading && listed.length === 0 ? <p className="font-mono text-sm text-muted">No notes published yet.</p> : null}

        <ol className="border-t-2 border-line">
          {listed.map((post, i) => (
            <Reveal as="li" key={post._id} delay={i * 0.1} className="group relative grid gap-2 border-b border-line py-6 hover:bg-faint md:grid-cols-[4rem_9rem_1fr_12rem] md:items-baseline md:gap-6 md:px-2">
              <span className="font-mono text-sm text-dim">N-{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-sm text-muted">{post.isSeries ? "Series" : post.date}</span>
              <div>
                <h3 className="text-2xl leading-tight tracking-tight">
                  <Link to={postHref(post)} className="card-link group-hover:text-dim">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 max-w-prose leading-relaxed">{post.excerpt}</p>
              </div>
              <span className="font-mono text-sm tracking-wider text-muted uppercase md:text-right">
                {post.category} <span aria-hidden="true">↗</span>
              </span>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link to="/blog">View all writing →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
