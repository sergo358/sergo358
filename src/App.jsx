import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import Footer from './components/Footer';

function App() {
  return (
    <div className="telegram-container flex flex-col h-screen">
      <Header />
      <ChatInterface />
      <Footer />
    </div>
  );
}

export default App;
