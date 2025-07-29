import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Chat.css";

const characterData = {
  napoleon: { name: "Наполеон", icon: "🪖", color: "#fdc2c2ff", darkColor: "#624545" },
  einstein: { name: "Эйнштейн", icon: "🧠", color: "#c6d4ffff", darkColor: "#2E3A87" },
  cleopatra: { name: "Клеопатра", icon: "👑", color: "#FEF3C7", darkColor: "#8C7845" },
  tesla: { name: "Тесла", icon: "⚡", color: "#c1ded0ff", darkColor: "#1A5C4E" },
  lincoln: { name: "Линкольн", icon: "🎩", color: "#EDE9FE", darkColor: "#4B3D87" },
  daVinci: { name: "Да Винчи", icon: "🎨", color: "#f7d9eaff", darkColor: "#8C4562" },
};

const T2h = () => {
  const { characterId } = useParams();
  const character = characterData[characterId];
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingContent, setTypingContent] = useState("");
  const bottomRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const [messages, setMessages] = useState(() => {
    const savedChat = localStorage.getItem(`chat_${characterId}`);
    if (savedChat) {
      return JSON.parse(savedChat);
    }
    return [
      {
        role: "assistant",
        content: `Привет! Я ${character.name}. Можешь задать мне любой вопрос!`,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem(`chat_${characterId}`, JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, characterId]);

  const startTypingAnimation = (fullText) => {
    let i = 0;
    setTypingContent("");
    setIsTyping(true);
    
    typingIntervalRef.current = setInterval(() => {
      if (i < fullText.length) {
        setTypingContent(prev => prev + fullText.charAt(i));
        i++;
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        clearInterval(typingIntervalRef.current);
        setIsTyping(false);
        setMessages(prev => [...prev, { role: "assistant", content: fullText }]);
      }
    }, 30);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const newMessage = { role: "user", content: input };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "moonshotai/kimi-k2:free",
          messages: [
            {
              role: "system",
              content: `Ты ${character.name}, ты жил-живешь те времена что жил этот персонаж но также знаешь про настоящее, отвечай характром персонажа, так же ты знаешь языки на короторм говорил персонаж и можешь вставлять вразочки, например Да Винчи может вместо ДА иногда говорить OUI. Отвечай как реальный человек 2-3 предложениями, можешь и больше если надо.`
            },
            ...newMessages
          ],
          temperature: 0.7,
          max_tokens: 300
        },
        {
          headers: {
            "Authorization": "Bearer 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",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "History Chat"
          }
        }
      );

      const reply = response.data.choices[0].message.content;
      startTypingAnimation(reply);
      
    } catch (error) {
      console.error("Ошибка:", error.response?.data || error.message);
      
      let errorMessage = "Ошибка соединения. Попробуйте снова.";
      if (error.response?.status === 429) {
        errorMessage = "Слишком много запросов. Подождите 1 минуту.";
      }
      
      startTypingAnimation(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="chat">
      <div className="chat-header" style={{ backgroundColor: darkMode ? character.darkColor : character.color }}>
        <button onClick={() => navigate("/")}>← Назад</button>
        <h2>
          {character.icon} {character.name}
        </h2>
      </div>

      <div className="chat-body">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        
        {(isLoading || isTyping) && (
          <div className="message assistant">
            {isTyping ? (
              typingContent + "|"
            ) : (
              <div className="typing-indicator">
                <span className="typing-dot dot-1"></span>
                <span className="typing-dot dot-2"></span>
                <span className="typing-dot dot-3"></span>
              </div>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-container">
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={`Напишите ${character.name}...`}
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading}>
            {isLoading ? "..." : "➤"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default T2h;