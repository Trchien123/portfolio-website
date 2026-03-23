import axios from 'axios';

export const chatWithAI = async (req, res) => {
    try {
        const { message, history } = req.body;

        // handle empty messages
        if (!message || message.trim() === "") {
            return res.status(400).json({ error: "Message cannot be empty!" });
        }

        // get the URL
        const AI_AGENT_URL = process.env.AI_AGENT_URL;

        // get the response
        const response = await axios.post(AI_AGENT_URL, {
            message,
            history: history || []
        });

        // return the results
        return res.status(200).json(response.data);

    } catch (error) {
        console.error("AI Proxy Error:", error.message);
        return res.status(500).json({ 
            error: "AI Agent is busy. Sorry for this inconvenience!" 
        });
    }
};