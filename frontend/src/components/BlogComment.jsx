import Giscus from "@giscus/react";
import { useTheme } from "@/lib/theme";

function BlogComment() {
  const { theme } = useTheme();

  return (
    <div className="mt-16 border-t-2 border-line pt-10">
      <h2 className="mb-8 text-3xl tracking-tight">Comments</h2>
      <Giscus
        id="comments"
        repo="Trchien123/portfolio-website"
        repoId="R_kgDOQ0tcFw"
        category="Announcements"
        categoryId="DIC_kwDOQ0tcF84C0o84"
        mapping="pathname"
        term="Welcome!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "dark" ? "dark_dimmed" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

export default BlogComment;
