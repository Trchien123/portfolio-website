import express from 'express';
import { chatWithAI } from "../controllers/aiControllers.js";

const aiRouters = express.Router();

aiRouters.post('/chat', chatWithAI);

export default aiRouters;