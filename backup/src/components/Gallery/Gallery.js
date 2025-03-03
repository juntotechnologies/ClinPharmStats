import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {items.map(item => (
          <div 
            key={item.id} 
            className="gallery-item"
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <img src={item.image} alt={item.title} />
            <div className={`overlay ${activeItem === item.id ? 'active' : ''}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 