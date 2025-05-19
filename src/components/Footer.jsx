import React, { useState } from 'react';

const Footer = () => {
  const [message, setMessage] = useState('');

  return (
    <footer className="bg-white border-t border-gray-200 p-3">
      <div className="flex items-center">
        <i className="bi bi-emoji-smile text-gray-500 text-xl mx-2"></i>
        <input
          type="text"
          className="flex-1 p-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message ? (
          <button className="ml-2 text-primary">
            <i className="bi bi-send-fill text-xl"></i>
          </button>
        ) : (
          <div className="flex ml-2">
            <i className="bi bi-paperclip text-gray-500 text-xl mx-2"></i>
            <i className="bi bi-mic text-gray-500 text-xl mx-2"></i>
          </div>
        )}
      </div>
      <div className="text-center text-xs text-gray-500 mt-2">
        Designed by WebSparks AI
      </div>
    </footer>
  );
};

export default Footer;
