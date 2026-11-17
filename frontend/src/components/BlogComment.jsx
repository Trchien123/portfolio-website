import Giscus from '@giscus/react';
import { useTheme } from '@/lib/theme';

const BlogComment = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-16 pt-10 border-t border-text-main/10">
      <h3 className="text-3xl font-bold text-text-main mb-8">Comments</h3>
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
        theme={theme === 'dark' ? 'dark_dimmed' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default BlogComment;
