import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Wordmark = ({ className }) => (
  <Link
    to="/"
    aria-label="Huynh Trung Chien, home"
    className={cn("text-xl font-semibold tracking-tight text-fg", className)}
  >
    Chien<span className="text-accent">.</span>
  </Link>
);

export default Wordmark;
