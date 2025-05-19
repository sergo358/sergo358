import React from 'react';

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Message;
