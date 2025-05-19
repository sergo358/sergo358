import React from 'react';

const ConfirmationMessage = ({ onConfirm }) => {
  return (
    <div className="confirmation-message mt-4 mb-2 flex justify-center">
      <button 
        className="option-button bg-green-500 text-white border-green-500 hover:bg-green-600 mr-4"
        onClick={() => onConfirm(true)}
      >
        <i className="bi bi-check-circle mr-1"></i> Подтвердить
      </button>
      <button 
        className="option-button bg-red-500 text-white border-red-500 hover:bg-red-600"
        onClick={() => onConfirm(false)}
      >
        <i className="bi bi-x-circle mr-1"></i> Отменить
      </button>
    </div>
  );
};

export default ConfirmationMessage;
