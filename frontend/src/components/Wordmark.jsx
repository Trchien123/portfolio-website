import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Wordmark = ({ className }) => (
  <Link to="/" aria-label="Huynh Trung Chien, home" className={cn("text-2xl font-black tracking-tight text-ink", className)}>
    Chien<span className="text-dim">.</span>
  </Link>
);

export default Wordmark;
