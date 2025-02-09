import React, { useState } from 'react';

function ColorBox({ initialColor = "#ffffff", colorOptions = [] }) {

  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    if (colorOptions.length > 0) {
      const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      setColor(randomColor);
    } else {
      // Générer une couleur aléatoire en hexadécimal si aucune option n'est fournie
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }
  };

  return (
    <div>
    
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          margin: '20px',
          border: '1px solid #000',
        }}
      ></div>

      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
}

export default ColorBox;