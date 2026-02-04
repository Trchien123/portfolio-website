import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error when fetching the post", error});
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Invalid ID format", error });
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: "Error when creating post", error});
    }
};

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Error when updating!", error});
    }
};


export const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Successfully deleted the post!"});
    } catch (error) {
        res.status(500).json({ message: "Error when deleting the post!"});
    }
};