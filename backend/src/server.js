import express from 'express';
import router from './routes/postsRouters.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors';
import aiRouters from './routes/aiRouters.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

// middlwares
app.use(cors({
    origin: [
        "https://huynhtrungchien.dev",
        "https://www.huynhtrungchien.dev",
        "http://localhost:5173"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
connectDB();

app.use("/api/posts", router);
app.use("/api/career-agent", aiRouters);

app.get('/', (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
    console.log("Server is running at port 5001!")
});
