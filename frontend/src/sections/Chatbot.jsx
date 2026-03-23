import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2, Minimize2 } from 'lucide-react';
import api from '@/lib/axios';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto Scrolling
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMsg = { role: "user", content: message };
    setHistory(prev => [...prev, userMsg]);
    setMessage("");
    setIsLoading(true);

    try {
      // Call API
      const res = await api.post('/career-agent/chat', {
        message: message,
        history: history.map(h => ({ role: h.role, content: h.content }))
      });

      const botMsg = { role: "assistant", content: res.data.response };
      setHistory(prev => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat Error:", err);
      setHistory(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I'm having trouble connecting to my brain. Please try again later!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-9999 font-sans">
      {/* Open Chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neon text-navy p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-text-button group"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-12 right-0 bg-bg-surface text-text-main text-xs py-1 px-3 rounded-lg border border-text-button/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with my AI Agent!
          </span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div 
          className="bg-bg-surface/95 backdrop-blur-xl border border-text-button/30 w-87.5 md:w-100 h-137.5 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform scale-100"
          data-aos="fade-up"
        >
          {/* Header */}
          <div className="bg-neon/10 border-b border-text-button/20 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center text-navy">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-main">Chien's Agent</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-text-muted/60 uppercase">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text-button transition-colors">
              <Minimize2 size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide" ref={scrollRef}>
            {history.length === 0 && (
              <div className="text-center py-10 space-y-3">
                <Bot size={40} className="mx-auto text-text-button opacity-20" />
                <p className="text-text-muted/60 text-sm">
                  Hi! I'm Chien's AI Agent. <br/> Ask me about his GPA, Skills, or anything!
                </p>
              </div>
            )}
            
            {history.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neon/30 text-text-main rounded-tr-none' 
                    : 'bg-bg-main/50 text-text-main border border-text-main/10 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-bg-main/50 p-3 rounded-2xl rounded-tl-none border border-text-main/10">
                  <Loader2 size={16} className="animate-spin text-text-button" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t border-text-main/5 bg-bg-main/20">
            <div className="relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
                className="w-full bg-bg-surface border border-text-main/10 rounded-full py-3 px-5 pr-12 text-sm text-text-main focus:border-text-button outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={!message.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-text-button hover:bg-neon hover:text-navy rounded-full transition-all disabled:opacity-30"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;