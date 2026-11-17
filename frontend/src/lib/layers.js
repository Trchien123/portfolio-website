// The four layers of the stack, top to bottom.
export const LAYERS = ["Interface", "APIs", "Data", "Models"];

export const LAYER_TECH = {
  Interface: "React · Tailwind",
  APIs: "FastAPI · Node",
  Data: "Pinecone · SQL",
  Models: "TensorFlow · LLMs",
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

export function statusFor(description = "") {
  return /in progress/i.test(description) ? "In progress" : "On GitHub";
}
