import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { login } from '../controllers/auth.js';

import { getAllPosts, createPost, getPostById, deletePost, updatePost } from '../controllers/postsControllers.js';

const router = express.Router();

router.get("/", getAllPosts);

router.post("/", verifyToken, createPost);

router.get("/:id", getPostById);

router.post('/login', login);

router.put("/:id", verifyToken, updatePost);

router.delete("/:id", verifyToken, deletePost);

export default router;