"use client";

import React, { useState } from 'react';

export default function ChatbotModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();

      const botMessage = { role: 'bot', content: data.reply };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      const errorMessage = { role: 'bot', content: "Sorry, there was an error. 🐾" };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Chatbot error:", error);
    } finally {
      setIsTyping(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-48 right-6 bg-white shadow-2xl rounded-2xl w-80 p-4 z-50 border-2 border-blue-400 animate-fadeIn">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-blue-600">Vet Assistant 🐾</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>
      </div>

      <div className="h-64 overflow-y-auto mb-3 space-y-2">
        {messages.map((msg, idx) => (
          <div 
            key={idx}
            className={`p-2 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-blue-100 text-right' 
                : 'bg-gray-100 text-left'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isTyping && (
          <div className="italic text-gray-400">Vet is typing...</div>
        )}
      </div>

      <div className="flex">
        <input 
          type="text"
          className="flex-1 border rounded-l-lg p-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
        />
        <button 
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
