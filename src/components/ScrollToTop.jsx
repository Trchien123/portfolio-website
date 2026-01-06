import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import AOS from 'aos';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
    
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;