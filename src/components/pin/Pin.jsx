import { useState } from 'react';

function Pin() {
  const [birthTime, setBirthTime] = useState('');

  const handleInputChange = (e) => {
    setBirthTime(e.target.value);
  };

  return (
    <div>
      <label htmlFor="birthTime">Birth Time:</label>
      <input
        type="time"
        id="birthTime"
        value={birthTime}
        onChange={handleInputChange}
      />
      <p>Selected Birth Time: {birthTime}</p>
    </div>
  );
}

export default Pin;
