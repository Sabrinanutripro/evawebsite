import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const defaultResponse = "Merci pour votre message ! Je vous répondrai dans les plus brefs délais. En attendant, n'hésitez pas à consulter les différentes sections du site pour en savoir plus sur le programme.";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage('');

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Add default response after a small delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: defaultResponse
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
  };

  return (
    <>
      {/* Chat Button - Positioned above the mobile CTA */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[calc(4.5rem+1rem)] md:bottom-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-40"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-[400px] bg-white md:rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Chat avec Eva</h3>
                  <p className="text-sm text-white/80">Posez vos questions</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm md:text-base ${
                      msg.role === 'user'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t flex-shrink-0 bg-white">
              <div className="flex gap-2">
                <TextareaAutosize
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 resize-none rounded-xl border-2 border-gray-100 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 p-2 max-h-32 text-sm md:text-base"
                  maxRows={4}
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-10 h-10 flex-shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};