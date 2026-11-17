import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DimensionLine from "@/components/drawing/DimensionLine";
import api from "@/lib/axios";
import { useReveal } from "@/lib/useReveal";

function BlogSeriesPage() {
  const { seriesName } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [seriesInfo, setSeriesInfo] = useState(null);
  const headRef = useReveal({ immediate: true });

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => {
        const decodedParam = decodeURIComponent(seriesName).trim().toLowerCase();
        const inSeries = (post) => post.seriesName?.trim().toLowerCase() === decodedParam;
        // chapters of the series, in order, and the series folder itself
        setPosts(res.data.filter((post) => inSeries(post) && !post.isSeries).sort((a, b) => a.chapter - b.chapter));
        setSeriesInfo(res.data.find((post) => inSeries(post) && post.isSeries === true));
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [seriesName]);

  if (isLoading) {
    return <p className="min-h-96 px-4 py-20 font-mono text-sm text-muted md:px-10">Loading series…</p>;
  }

  const lastPublished = posts.length > 0 ? posts[posts.length - 1].date : seriesInfo?.date || "N/A";

  return (
    <div className="px-4 py-14 md:px-10 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
        {/* reason (grid-cols): chapter list + fixed-width series title block */}
        <div>
          <header ref={headRef} className="mb-10">
            <Link to="/blog" className="font-mono text-sm text-muted hover:text-dim">
              ← Technical notes
            </Link>
            <DimensionLine label="Series" className="mt-6 mb-6 max-w-lg" />
            <h1 className="rv-wipe pb-descender text-5xl leading-display tracking-tightest md:text-7xl">{seriesName}</h1>
          </header>

          <ol className="border-t-2 border-line">
            {posts.map((post, index) => (
              <li key={post._id} className="group relative grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-6 transition-colors duration-200 hover:bg-faint md:px-2">
                <span className="font-mono text-lg text-dim">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-2xl leading-tight tracking-tight">
                    <Link to={`/blog/${post._id}`} className="card-link group-hover:text-dim">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-2 max-w-prose leading-relaxed">{post.excerpt}</p>
                  <p className="mt-2 font-mono text-sm text-muted">
                    {post.readTime} · {post.date}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside>
          <div className="border-2 border-line lg:sticky lg:top-28">
            <p className="border-b border-line px-5 py-3 font-mono text-label tracking-wider text-muted uppercase">About series</p>
            <p className="border-b border-line px-5 py-4 leading-relaxed">{seriesInfo?.excerpt || `A collection of articles covering ${seriesName}.`}</p>
            <dl>
              {[
                ["Total articles", posts.length],
                ["Last published", lastPublished],
                ["Category", seriesInfo?.category || "General"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-line px-5 py-3 last:border-b-0">
                  <dt className="font-mono text-label tracking-wider text-muted uppercase">{label}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogSeriesPage;
