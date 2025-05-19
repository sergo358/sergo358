import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import ServiceSelection from './ServiceSelection';
import DateSelection from './DateSelection';
import TimeSelection from './TimeSelection';
import ConfirmationMessage from './ConfirmationMessage';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message
    setTimeout(() => {
      addBotMessage("👋 Здравствуйте! Я бот-помощник салона красоты 'Элегант'. Чем могу помочь?");
    }, 1000);

    setTimeout(() => {
      addBotMessage("Вы можете записаться на стрижку, окрашивание, укладку или маникюр. Какую услугу вы хотели бы выбрать?");
      setCurrentStep('service');
    }, 3000);
  }, []);

  useEffect(() => {
    if (selectedService) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(`Вы выбрали: ${selectedService}. Отличный выбор!`);
        setIsTyping(false);
        
        setTimeout(() => {
          addBotMessage("Пожалуйста, выберите удобную для вас дату:");
          setCurrentStep('date');
        }, 1000);
      }, 1500);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedDate) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(`Вы выбрали дату: ${selectedDate}`);
        setIsTyping(false);
        
        setTimeout(() => {
          addBotMessage("Теперь выберите удобное время:");
          setCurrentStep('time');
        }, 1000);
      }, 1500);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage(`Вы выбрали время: ${selectedTime}`);
        setIsTyping(false);
        
        setTimeout(() => {
          addBotMessage(`Подтвердите вашу запись:
          \nУслуга: ${selectedService}
          \nДата: ${selectedDate}
          \nВремя: ${selectedTime}`);
          setCurrentStep('confirmation');
        }, 1000);
      }, 1500);
    }
  }, [selectedTime]);

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { text, isUser: false }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { text, isUser: true }]);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    addUserMessage(service);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    addUserMessage(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    addUserMessage(time);
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      addUserMessage("Подтверждаю запись");
      setIsTyping(true);
      
      setTimeout(() => {
        addBotMessage("Отлично! Ваша запись подтверждена. Мы ждем вас в салоне 'Элегант'.");
        setIsTyping(false);
        setBookingConfirmed(true);
        
        setTimeout(() => {
          addBotMessage("За день до визита я отправлю вам напоминание. Если у вас возникнут вопросы или вам потребуется изменить запись, просто напишите мне.");
          setCurrentStep('completed');
        }, 1500);
      }, 2000);
    } else {
      addUserMessage("Отменить запись");
      setIsTyping(true);
      
      setTimeout(() => {
        addBotMessage("Запись отменена. Хотите выбрать другое время или услугу?");
        setIsTyping(false);
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setCurrentStep('service');
      }, 1500);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} isUser={message.isUser} />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      {currentStep === 'service' && !selectedService && (
        <ServiceSelection onSelect={handleServiceSelect} />
      )}
      
      {currentStep === 'date' && selectedService && !selectedDate && (
        <DateSelection onSelect={handleDateSelect} />
      )}
      
      {currentStep === 'time' && selectedDate && !selectedTime && (
        <TimeSelection onSelect={handleTimeSelect} />
      )}
      
      {currentStep === 'confirmation' && selectedTime && !bookingConfirmed && (
        <ConfirmationMessage onConfirm={handleConfirmation} />
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatInterface;
