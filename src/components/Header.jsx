import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <i className="bi bi-arrow-left text-xl mr-4"></i>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">BeautyBot</h1>
          <p className="text-xs text-gray-200">Online</p>
        </div>
      </div>
      <div className="flex items-center">
        <i className="bi bi-search text-xl mr-4"></i>
        <i className="bi bi-three-dots-vertical text-xl"></i>
      </div>
    </header>
  );
};

export default Header;
