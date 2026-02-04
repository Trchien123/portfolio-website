import express from 'express';
import router from './routes/postsRouters.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

// middlwares
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));

connectDB();

app.use("/api/posts", router);

app.get('/', (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
    console.log("Server is running at port 5001!")
});
