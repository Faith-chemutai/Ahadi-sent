import React, { useState } from 'react';

const SkizaTune = ({ title, skizaCode, price, imageUrl, audioUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="skiza-tune">
      <img src={imageUrl} alt={title} className="skiza-image" />
      <h3>{title}</h3>
      <p>Skiza Code: {skizaCode}</p>
      <p>Price: {price}</p>
      
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button onClick={toggleFavorite}>
        {isFavorite ? '❤️ ' : '🤍'}
      </button>
      <button>Subscribe to Skiza Tune</button>
    </div>
  );
};

export default SkizaTune;
