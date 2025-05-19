import React, { useState } from 'react';
import { format, addDays, startOfWeek, addWeeks, isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';

const DateSelection = ({ onSelect }) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(addWeeks(today, currentWeek), { weekStartsOn: 1 });
  
  const days = Array.from({ length: 14 }, (_, i) => {
    const date = addDays(startOfCurrentWeek, i);
    const isDisabled = date < today;
    return {
      date,
      dayName: format(date, 'EEE', { locale: ru }),
      dayNumber: format(date, 'd'),
      month: format(date, 'MMM', { locale: ru }),
      isDisabled,
      isToday: isSameDay(date, today)
    };
  });

  const handleDateClick = (date) => {
    if (!date.isDisabled) {
      const formattedDate = format(date.date, 'd MMMM yyyy', { locale: ru });
      onSelect(formattedDate);
    }
  };

  return (
    <div className="date-selection mt-4 mb-2">
      <div className="flex justify-between mb-2">
        <button 
          className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          disabled={currentWeek === 0}
          onClick={() => setCurrentWeek(prev => prev - 1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <span className="font-medium">
          {format(startOfCurrentWeek, 'MMMM yyyy', { locale: ru })}
        </span>
        <button 
          className="px-3 py-1 bg-gray-200 rounded-md"
          onClick={() => setCurrentWeek(prev => prev + 1)}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div 
            key={index}
            className={`calendar-day ${day.isDisabled ? 'disabled' : 'hover:bg-gray-200'} ${day.isToday ? 'border border-primary' : ''}`}
            onClick={() => handleDateClick(day)}
          >
            <div className="text-xs uppercase">{day.dayName}</div>
            <div className="text-lg font-medium">{day.dayNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSelection;
