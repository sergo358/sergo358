import React from 'react';

const ServiceSelection = ({ onSelect }) => {
  const services = [
    'Женская стрижка',
    'Мужская стрижка',
    'Окрашивание волос',
    'Укладка',
    'Маникюр',
    'Педикюр',
    'Макияж'
  ];

  return (
    <div className="service-selection flex flex-wrap justify-center mt-4 mb-2">
      {services.map((service, index) => (
        <button
          key={index}
          className="option-button m-1 transition-all hover:bg-primary hover:text-white"
          onClick={() => onSelect(service)}
        >
          {service}
        </button>
      ))}
    </div>
  );
};

export default ServiceSelection;
