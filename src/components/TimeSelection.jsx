import React from 'react';

const TimeSelection = ({ onSelect }) => {
  // Generate time slots from 9:00 to 19:00
  const generateTimeSlots = () => {
    const slots = [];
    const bookedSlots = ['10:00', '14:30', '16:00']; // Example of already booked slots
    
    for (let hour = 9; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const isBooked = bookedSlots.includes(timeString);
        
        slots.push({
          time: timeString,
          isBooked
        });
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="time-selection mt-4 mb-2">
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`time-slot ${slot.isBooked ? 'disabled' : 'hover:bg-primary hover:text-white'}`}
            disabled={slot.isBooked}
            onClick={() => !slot.isBooked && onSelect(slot.time)}
          >
            {slot.time}
            {slot.isBooked && <span className="ml-2 text-xs">(занято)</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
