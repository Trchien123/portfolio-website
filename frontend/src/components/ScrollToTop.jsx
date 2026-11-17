import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// New routes start at the top; back/forward keeps the browser's position.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;
