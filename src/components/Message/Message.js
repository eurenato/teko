import React from 'react';
import './Message.css';
import ReactMarkdown from 'react-markdown';
// Import your user and AI icon images
// Make sure these paths are correct relative to this file
import userIcon from './user-icon.png'; 
import aiIcon from './ai-icon.png';   

const Message = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`message ${isUser ? 'user' : 'ai'}`}>
      <div className="message-header"> {/* New wrapper for icon and name */}
        <img 
          src={isUser ? userIcon : aiIcon} 
          alt={isUser ? "Ícone do usuário" : "Ícone da IA"} 
          className="message-icon" 
        />
        {isUser ? 'Você' : 'Tekinho'}
      </div>
      <div className="message-bubble">
        <ReactMarkdown>
        {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Message;