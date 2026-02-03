import React, { useState, useEffect } from 'react';
import Giscus from '@giscus/react';

const BlogComment = () => {
  const [giscusTheme, setGiscusTheme] = useState('dark_dimmed');

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains('light');
      // 'light' or 'dark_dimmed'
      setGiscusTheme(isLight ? 'light' : 'dark_dimmed'); 
    };

    checkTheme();

    // Observe the changes in the theme
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

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
        theme={giscusTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default BlogComment;