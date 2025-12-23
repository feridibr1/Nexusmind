import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.scss";

const chats = [
  {
    id: "ai-bot",
    title: "AI Health Bot",
    subtitle: "How can I help you today?",
    time: "Today",
    isActive: true,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: `Hello! I'm your AI Health Bot. How can I help you today?`,
  },
];

const GEMINI_MODEL = "gemini-2.5-flash";

export default function Chatbot() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const chatBodyRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input.trim(),
    };

    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const reply = await callGemini(updated);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: reply,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setError("Error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  async function callGemini(chatMessages) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const contents = chatMessages.map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      }
    );

    const data = await response.json();

    return (
      data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
      "Could you repeat that?"
    );
  }

  return ( 
      <main className="chatbot-layout">
        {/* SIDEBAR */}
        <aside className="chatbot-sidebar">
          <div className="chatbot-sidebar__header">
            <h2>Messages</h2>
            <span className="chatbot-sidebar__count">{chats.length}</span>
          </div>

          <div className="chatbot-sidebar__list">
            {chats.map((c) => (
              <div key={c.id} className="chatbot-chatitem chatbot-chatitem--active">
                <div className="chatbot-chatitem__avatar">AI</div>
                <div>
                  <div className="chatbot-chatitem__title">{c.title}</div>
                  <div className="chatbot-chatitem__subtitle">{c.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CHAT WINDOW */}
        <section className="chatbot-window">

          {/* CHAT BODY */}
          <div className="chatbot-window__body" ref={chatBodyRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender === "user"
                    ? "chatbot-message chatbot-message--user"
                    : "chatbot-message chatbot-message--bot"
                }
              >
                <div className="chatbot-message__bubble">{msg.text}</div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-message chatbot-message--bot">
                <div className="chatbot-typing-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}

            {error && <div className="chatbot-error">{error}</div>}
          </div>

          {/* INPUT */}
          <form className="chatbot-inputbar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              ➤
            </button>
          </form>
        </section>
      </main> 
  );
}

