import React, { useState, useEffect } from 'react';
import { Send, Edit3, Trash2, PlusCircle, LayoutGrid, Lock, LogOut } from 'lucide-react';
import api from '@/lib/axios';

// CATEGORIES
const CATEGORIES = ["AI Engineering", "Computer Vision", "Web Development", "Deep Learning", "Tutorials"];

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Existing state
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '', excerpt: '', content: '', category: 'AI Engineering', image: '', readTime: ''
  });

  // Check for existing token on load
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsAuthenticated(true);
      fetchPosts();
    }
  }, []);

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/posts/login', { password });
      localStorage.setItem('admin_token', res.data.token);
      setIsAuthenticated(true);
      fetchPosts();
    } catch (err) {
      alert("Invalid Password");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setPosts([]);
  };

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await api.get('/posts');
      setPosts(res.data);
    } catch (err) { console.error("Fetch error:", err); }
  };

  // HandleChange, handleSubmit, resetForm
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Processing...');
    try {
      if (editingId) {
        await api.put(`/posts/${editingId}`, formData);
        setStatus('✅ Updated');
      } else {
        await api.post('/posts', formData);
        setStatus('✅ Published');
      }
      resetForm();
      fetchPosts();
    } catch (err) { 
        console.error(err);
        if(err.response && err.response.status === 401) {
            setStatus('❌ Session Expired');
            handleLogout();
        } else {
            setStatus('❌ Error'); 
        }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: '', excerpt: '', content: '', category: 'AI Engineering', image: '', readTime: '' });
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="max-w-md w-full bg-bg-surface/50 border border-text-main/10 p-8 rounded-3xl backdrop-blur-sm">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-bg-main rounded-full text-text-button">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-text-main mb-6">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main focus:border-text-button outline-none transition-all mb-6"
          />
          <button type="submit" className="w-full bg-text-button text-bg-main py-3 rounded-xl font-bold hover:opacity-80 transition-all">
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
            <LayoutGrid className="text-text-button" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-text-muted">Admin Panel</h2>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 font-bold">
            <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="space-y-12">
         
         {/* Form container for context */}
         <div className="bg-bg-surface/50 border border-text-main/10 rounded-3xl relative overflow-hidden backdrop-blur-sm p-5 md:p-8">
             <h3 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
                {editingId ? <Edit3 size={24} className="text-blue-400" /> : <PlusCircle size={24} className="text-text-button" />}
                {editingId ? "Edit Post" : "New Post"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="w-full bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main focus:border-text-button outline-none transition-all" />
                    <div className="flex gap-4">
                        <select name="category" value={formData.category} onChange={handleChange} className="flex-1 bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main outline-none">
                            {CATEGORIES.map(cat => <option key={cat} value={cat} className="bg-bg-surface">{cat}</option>)}
                        </select>
                        <input name="readTime" placeholder="Read Time" value={formData.readTime} onChange={handleChange} className="flex-1 bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main outline-none" />
                    </div>
                </div>
                <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main outline-none" />
                <textarea name="excerpt" placeholder="Excerpt..." value={formData.excerpt} onChange={handleChange} rows="2" className="w-full bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main outline-none" />
                <textarea name="content" placeholder="Markdown content..." value={formData.content} onChange={handleChange} rows="10" required className="w-full bg-bg-main/50 border border-text-main/10 rounded-xl py-3 px-4 text-text-main font-mono outline-none" />
                
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-text-button uppercase tracking-widest">{status}</span>
                    <div className="flex gap-3">
                        {editingId && (<button type="button" onClick={resetForm} className="text-red-400 font-bold px-4">Cancel</button>)}
                        <button type="submit" className="bg-text-button text-bg-main px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-80 transition-all">
                            {editingId ? "Update" : "Publish"} <Send size={18} />
                        </button>
                    </div>
                </div>
            </form>
         </div>

         {/* Post Management List */}
         <div className="bg-bg-surface/50 border border-text-main/10 rounded-3xl p-5 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-text-muted mb-6 uppercase tracking-widest px-2">Manage Database</h3>
            <div className="space-y-3">
                {posts.map((post) => (
                    <div key={post._id} className="p-4 bg-bg-surface/30 rounded-2xl border border-text-main/5 flex justify-between items-center group hover:border-text-button/30 transition-all">
                        <span className="font-medium text-text-main truncate pr-4">{post.title}</span>
                        <div className="flex gap-4">
                            <button onClick={() => {setEditingId(post._id); setFormData(post); window.scrollTo({top:0, behavior:'smooth'})}} className="text-text-muted/60 hover:text-blue-400 transition-colors"><Edit3 size={18} /></button>
                            <button onClick={() => {if(window.confirm("Delete?")) api.delete(`/posts/${post._id}`).then(fetchPosts)}} className="text-text-muted/60 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
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