import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Minimize2, Send } from "lucide-react";
import api from "@/lib/axios";

const ERROR_REPLY = "Sorry, I'm having trouble connecting to my brain. Please try again later!";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const cannotSend = !message.trim() || isLoading;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  async function handleSend(e) {
    e.preventDefault();
    if (cannotSend) return;

    setHistory((prev) => [...prev, { role: "user", content: message }]);
    setMessage("");
    setIsLoading(true);

    try {
      const res = await api.post("/career-agent/chat", {
        message,
        history: history.map((h) => ({ role: h.role, content: h.content })),
      });
      setHistory((prev) => [...prev, { role: "assistant", content: res.data.response }]);
    } catch (err) {
      console.error("Chat Error:", err);
      setHistory((prev) => [...prev, { role: "assistant", content: ERROR_REPLY }]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          title="Chat with my AI Agent!"
          className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full bg-accent text-accent-fg shadow-float transition-colors duration-150 ease-out-soft hover:bg-accent-hover"
        >
          <MessageCircle size={22} aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6">
      <div
        role="dialog"
        aria-label="Chien's Agent"
        // reason: panel width clamps to the viewport on small screens
        className="flex h-[min(34rem,calc(100dvh-6rem))] w-[min(25rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-md border border-border bg-surface shadow-float"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Bot size={18} aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-fg">Chien's Agent</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Minimize chat"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-sm text-fg-muted transition-colors duration-150 hover:bg-surface-hover hover:text-fg"
          >
            <Minimize2 size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4" ref={scrollRef} aria-live="polite">
          {history.length === 0 ? (
            <p className="py-10 text-center text-sm text-fg-muted">
              Hi! I'm Chien's AI Agent. <br /> Ask me about his GPA, Skills, or anything!
            </p>
          ) : null}

          {history.map((msg, idx) => {
            const isUser = msg.role === "user";
            return (
              <div key={idx} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-relaxed ${
                    isUser ? "bg-accent text-accent-fg" : "border border-border bg-bg text-fg"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            );
          })}

          {isLoading ? (
            <div className="flex justify-start">
              <div className="rounded-md border border-border bg-bg px-3 py-2">
                <Loader2 size={16} className="animate-spin text-fg-muted" aria-label="Loading" />
              </div>
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSend} className="border-t border-border p-3">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              aria-label="Message"
              className="h-11 w-full rounded-sm border border-border-strong bg-bg pr-12 pl-3 text-base text-fg placeholder:text-fg-subtle"
            />
            <button
              type="submit"
              disabled={cannotSend}
              aria-label="Send"
              className="absolute top-1/2 right-1 inline-flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm text-accent transition-colors duration-150 hover:bg-accent-soft disabled:cursor-default disabled:opacity-40"
            >
              <Send size={18} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
