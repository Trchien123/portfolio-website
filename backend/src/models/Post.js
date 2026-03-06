import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, default: () => new Date().toLocaleDateString('en-GB') },
  readTime: { type: String },
  category: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  isSeries: { type: Boolean, default: false},
  seriesName: { type: String, default: ""},
  chapter: { type: Number, default: 0}
});

const Post = mongoose.model('Post', postSchema);
export default Post;