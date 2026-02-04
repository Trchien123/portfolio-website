// controllers/authControllers.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    const { password } = req.body;

    try {
        // Compare the plain password sent from frontend with the Hash in .env
        const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If Match, generate Token
        const token = jwt.sign(
            { role: 'admin' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: "Server error during login" });
    }
};