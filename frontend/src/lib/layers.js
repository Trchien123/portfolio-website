import { portfolioData } from "./data";

// The four layers of the stack, top to bottom.
export const LAYERS = ["Interface", "APIs", "Data", "Models"];

// Tools per layer, taken only from the skills and project tech in data.js.
export const LAYER_TOOLS = {
  Interface: ["React.js", "Tailwind CSS", "Vite", "HTML5 & CSS3", "JavaScript (ES6+)"],
  APIs: ["FastAPI"],
  Data: ["Pinecone", "Pandas & NumPy"],
  Models: ["TensorFlow / Keras", "OpenCV", "Scikit-learn", "Transformers (LLMs)"],
};

// Which layers a project touches, derived from its existing tech list.
const RULES = {
  Interface: /react|tailwind|vite|html|css|streamlit/i,
  APIs: /fastapi|node|express|\bapi\b/i,
  Data: /pinecone|sql|mongo|postgres|redis|pandas/i,
  Models: /tensorflow|keras|pytorch|vision|openai|llm|opencv|scikit/i,
};

export function layersFor(tech = []) {
  const text = tech.join(" ");
  return LAYERS.filter((layer) => RULES[layer].test(text));
}

export function projectsFor(layer) {
  return portfolioData.projects.filter((project) => layersFor(project.tech).includes(layer));
}

export function statusFor(description = "") {
  return /in progress/i.test(description) ? "In progress" : "On GitHub";
}
