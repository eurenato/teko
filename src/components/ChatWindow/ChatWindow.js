import React, { useRef, useEffect } from 'react';
import Message from '../Message/Message'; 
import './chatWindow.css';

const ChatWindow = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;