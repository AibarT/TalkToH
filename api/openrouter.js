// /api/openrouter.js
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, character } = req.body;

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'API ключ не найден. Убедись, что он есть в .env или настройках Vercel.' });
  }

  try {
    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
      model: "moonshotai/kimi-k2:free",
      messages: [
        {
          role: "system",
          content: `Ты ${character.name}, ты жил-живешь те времена что жил этот персонаж, но знаешь о настоящем. Отвечай характером персонажа.`,
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 300
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://talktoh-xo5x.vercel.app",
        "X-Title": "History Chat"
      }
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.error("Axios error:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Что-то пошло не так." });
  }
}
