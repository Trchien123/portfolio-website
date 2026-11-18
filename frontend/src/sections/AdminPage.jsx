import { useState, useEffect } from "react";
import {
  Send,
  Edit3,
  Trash2,
  PlusCircle,
  LayoutGrid,
  Lock,
  LogOut,
} from "lucide-react";
import api from "@/lib/axios";

// CATEGORIES
const CATEGORIES = [
  "All",
  "Others",
  "Computer Vision",
  "Web Development",
  "ML/DL",
  "Maths",
  "Software Architecture",
];

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Existing state
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "ML/DL",
    image: "",
    readTime: "",
    isSeries: false,
    seriesName: "",
    chapter: 0,
  });

  // Check for existing token on load
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
      fetchPosts();
    }
  }, []);

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/posts/login", { password });
      localStorage.setItem("admin_token", res.data.token);
      setIsAuthenticated(true);
      fetchPosts();
    } catch {
      alert("Invalid Password");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setPosts([]);
  };

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // HandleChange, handleSubmit, resetForm
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    // create a payload to handle data type
    const payload = {
      ...formData,
      isSeries: String(formData.isSeries) === "true",
      chapter: Number(formData.chapter) || 0,
      seriesName: formData.seriesName ? formData.seriesName.trim() : ""
    };

    try {
      if (editingId) {
        await api.put(`/posts/${editingId}`, payload);
        setStatus("✅ Updated");
      } else {
        await api.post("/posts", payload);
        setStatus("✅ Published");
      }
      resetForm();
      fetchPosts();
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setStatus("❌ Session Expired");
        handleLogout();
      } else {
        setStatus("❌ Error");
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "ML/DL",
      image: "",
      readTime: "",
      isSeries: false,
      seriesName: "",
      chapter: 0,
    });
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="max-w-md w-full bg-sheet border-2 border-line p-8"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-sheet text-dim">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-ink mb-6">
            Admin Access
          </h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink focus:border-dim transition-all mb-6"
          />
          <button
            type="submit"
            className="w-full bg-fill text-on-fill py-3 font-bold hover:bg-ink hover:text-sheet transition-colors"
          >
            Unlock Panel
          </button>
        </form>
      </div>
    );
  }

  // ADMIN PANEL
  return (
    <section className="min-h-fit max-w-368 w-full flex flex-col mx-auto py-20 md:py-40 px-4 md:px-6 lg:px-8">
      <div className="mb-10 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <LayoutGrid className="text-dim" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-muted">
            Admin Panel
          </h2>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-danger hover:opacity-80 font-bold"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="space-y-12">
        {/* Form container for context */}
        <div className="bg-sheet border-2 border-line relative overflow-hidden p-5 md:p-8">
          <h3 className="text-2xl font-bold text-ink mb-6 flex items-center gap-2">
            {editingId ? (
              <Edit3 size={24} className="text-dim" />
            ) : (
              <PlusCircle size={24} className="text-dim" />
            )}
            {editingId ? "Edit Post" : "New Post"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink focus:border-dim transition-all"
              />
              <div className="flex gap-4">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="flex-1 bg-sheet border-2 border-line py-3 px-4 text-ink"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-sheet">
                      {cat}
                    </option>
                  ))}
                </select>
                <input
                  name="readTime"
                  placeholder="Read Time"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="flex-1 bg-sheet border-2 border-line py-3 px-4 text-ink"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Choose type of post */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-dim uppercase ml-2">
                  Post Type
                </label>
                <select
                  name="isSeries"
                  value={formData.isSeries}
                  onChange={handleChange}
                  className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink focus:border-dim"
                >
                  <option value="false" className="bg-sheet">
                    Single Article
                  </option>
                  <option value="true" className="bg-sheet">
                    Series Folder (Mastery)
                  </option>
                </select>
              </div>

              {/* Input for series name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-muted uppercase ml-2">
                  Series Name (Optional)
                </label>
                <input
                  name="seriesName"
                  placeholder="e.g. Linear Algebra"
                  value={formData.seriesName}
                  onChange={handleChange}
                  className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink focus:border-dim"
                />
              </div>

              {/* Input for chapter */}
              {!formData.isSeries && formData.seriesName && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-muted uppercase ml-2">
                    Order / Part #
                  </label>
                  <input
                    type="number"
                    name="chapter"
                    placeholder="e.g. 1"
                    value={formData.chapter}
                    onChange={handleChange}
                    className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink focus:border-dim"
                  />
                </div>
              )}
            </div>
            <input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink"
            />
            <textarea
              name="excerpt"
              placeholder="Excerpt..."
              value={formData.excerpt}
              onChange={handleChange}
              rows="2"
              className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink"
            />
            <textarea
              name="content"
              placeholder="Markdown content..."
              value={formData.content}
              onChange={handleChange}
              rows="10"
              required
              className="w-full bg-sheet border-2 border-line py-3 px-4 text-ink font-mono"
            />

            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-dim uppercase tracking-widest">
                {status}
              </span>
              <div className="flex gap-3">
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-danger font-bold px-4"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-fill text-on-fill px-8 py-3 font-bold flex items-center gap-2 hover:bg-ink hover:text-sheet transition-colors"
                >
                  {editingId ? "Update" : "Publish"} <Send size={18} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Post Management List */}
        <div className="bg-sheet border-2 border-line p-5 md:p-8">
          <h3 className="text-xl font-bold text-muted mb-6 uppercase tracking-widest px-2">
            Manage Database
          </h3>
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post._id}
                className="p-4 bg-sheet border-2 border-line flex justify-between items-center group hover:border-dim transition-all"
              >
                <span className="font-medium text-ink truncate pr-4">
                  {post.title}
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setEditingId(post._id);
                      setFormData(post);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-muted hover:text-dim transition-colors"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete?"))
                        api.delete(`/posts/${post._id}`).then(fetchPosts);
                    }}
                    className="text-muted hover:text-danger transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
