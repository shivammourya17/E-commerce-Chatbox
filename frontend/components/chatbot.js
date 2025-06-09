'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Trash2, Send, Bot } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "600", "700"] });

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const {user, isLoaded, isSignedIn} = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newmessages = messages.concat([
      {
        send_by: "User",
        content: input,
        products: []
      }
    ])
    setMessages(newmessages)

    const body_json = {
      user_id: user ? user.id : "anonymous_user" + Math.random().toString(36).substr(2, 8),
      prompt: input
    }

    const response = await fetch('http://127.0.0.1:8000/chat',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body_json)
      }
    )

    const data = await response.json()

    console.log(data)

    if (data.message) {
      const newmsg = {
        send_by: "Agent",
        content: data.message, 
        products: []
      }

      const NEW_MESSAGES = messages.concat([newmsg])
      setMessages(NEW_MESSAGES)
    }

    else if (data.products) {
      const newmsg = {
        send_by: "Agent",
        content: "Here are some of the coolest products based on your query.", 
        products: data.products.slice(0, 21)
      }

      const NEW_MESSAGES = messages.concat([newmsg])
      setMessages(NEW_MESSAGES)
    } else {
        const newmsg = {
        send_by: "Agent",
        content: "Can't Process Your Request At The Moment. Please Try Again Later.", 
        products: data.products
      }

      const NEW_MESSAGES = messages.concat([newmsg])
      setMessages(NEW_MESSAGES)
    }

    setInput('')
  };

  return (
    <div className={`${jost.className} fixed bottom-4 right-4 z-50`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            className="absolute bottom-16 right-0 w-[90vw] max-w-xl bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col"
            style={{ height: '600px' }}
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Chat Assistant</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${msg.send_by === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[80%] ${
                      msg.send_by === 'user'
                        ? 'flex-row-reverse'
                        : 'flex-row'
                    }`}
                  >
                    {msg.send_by === 'agent' && (
                      <span className="bg-blue-100 dark:bg-blue-800 p-1 rounded-full">
                        <Bot size={18} className="text-blue-500 dark:text-blue-300" />
                      </span>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        msg.send_by === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                  {msg?.products ?
                  msg.products.map((product, idx) => {
                    return(
                      <motion.div
                    className="w-full mt-10 mb-10 max-w-sm bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-4">
                      <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
                      <p className="text-gray-600 mt-1 flex-1">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600">${product.price}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          Buy
                        </button>
                      </div>
                    </div>
                  </motion.div>
                    )
                  }) 
                  :
                  <></>}
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setMessages([])}
                className="mb-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Trash2 size={18} />
                Clear Chat
              </button>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
