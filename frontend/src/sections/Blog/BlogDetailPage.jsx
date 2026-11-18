import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import BlogComment from "@/components/BlogComment";
import DimensionLine from "@/components/drawing/DimensionLine";
import api from "@/lib/axios";
import { useReveal } from "@/lib/useReveal";

// Markdown element factory: drops react-markdown's `node` prop, applies classes.
const md = (Tag, className) =>
  function MarkdownElement(props) {
    const rest = { ...props };
    delete rest.node;
    return <Tag className={className} {...rest} />;
  };

function CodeBlock(props) {
  const { inline, className, children, ...rest } = props;
  delete rest.node;
  const match = /language-(\w+)/.exec(className || "");
  if (inline || !match) {
    return (
      <code className="border border-faint bg-faint px-1.5 py-0.5 font-mono text-[0.9em] text-ink" {...rest}>
        {/* reason: inline code scales with its surrounding text */}
        {children}
      </code>
    );
  }
  return (
    <div className="my-8 border-2 border-line">
      <div className="flex justify-between border-b-2 border-line px-4 py-2 font-mono text-label tracking-wider text-muted uppercase">
        <span>{match[1]}</span>
      </div>
      <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" customStyle={{ margin: 0, borderRadius: 0 }} {...rest}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}

const MARKDOWN = {
  h1: md("h1", "mt-12 mb-4 text-4xl tracking-tight"),
  h2: md("h2", "mt-12 mb-4 border-b-2 border-line pb-2 text-3xl tracking-tight"),
  h3: md("h3", "mt-8 mb-3 text-2xl tracking-tight"),
  h4: md("h4", "mt-6 mb-2 text-xl tracking-tight"),
  p: md("p", "mb-6"),
  ul: md("ul", "mb-6 list-disc space-y-2 pl-6 marker:text-dim"),
  ol: md("ol", "mb-6 list-decimal space-y-2 pl-6 marker:font-mono marker:text-dim"),
  a: md("a", "text-ink underline decoration-line underline-offset-4 hover:text-dim"),
  table: md("table", "my-8 w-full border-2 border-line"),
  th: md("th", "border border-line px-4 py-2 text-left text-ink"),
  td: md("td", "border border-line px-4 py-2"),
  strong: md("strong", "font-bold text-ink"),
  blockquote: md("blockquote", "my-6 border-l-2 border-dim pl-5 text-ink"),
  img: md("img", "my-6 border-2 border-line"),
  code: CodeBlock,
};

function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const headRef = useReveal({ immediate: true });

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Post not found:", err))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return <p className="min-h-96 px-4 py-20 font-mono text-sm text-muted md:px-10">Loading note…</p>;
  }

  if (!post) {
    return (
      <div className="min-h-96 px-4 py-20 md:px-10">
        <h1 className="text-5xl tracking-tight">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-ink underline underline-offset-4 hover:text-dim">
          ← All technical notes
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-14 md:px-10 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        {/* reason (grid-cols): reading column + fixed-width side sheet */}
        <article>
          <header ref={headRef} className="mb-10">
            <Link to="/blog" className="font-mono text-sm text-muted hover:text-dim">
              ← Writing
            </Link>
            <DimensionLine label={post.category} className="mt-6 mb-6 max-w-lg" />
            <h1 className="rv-wipe pb-descender text-4xl leading-tight tracking-tight md:text-6xl">{post.title}</h1>
            <dl className="rv-up mt-6 grid grid-cols-3 border-2 border-line" style={{ "--d": "0.3s" }}>
              {[
                ["Date", post.date],
                ["Read", post.readTime],
                ["Drawn by", "Huynh Trung Chien"],
              ].map(([label, value]) => (
                <div key={label} className="border-r border-line px-4 py-3 last:border-r-0">
                  <dt className="font-mono text-label tracking-wider text-muted uppercase">{label}</dt>
                  <dd className="mt-0.5 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          {post.image ? (
            <figure className="mb-12 border-2 border-line">
              <img src={post.image} alt="" className="aspect-video w-full object-cover" />
            </figure>
          ) : null}

          <div className="max-w-prose bg-sheet text-lg leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]} components={MARKDOWN}>
              {post.content}
            </ReactMarkdown>
          </div>

          <BlogComment />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 border-2 border-line">
            <p className="border-b border-line px-4 py-3 font-mono text-label tracking-wider text-muted uppercase">Recommended</p>
            <p className="px-4 py-4">Under Construction....</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogDetailPage;
