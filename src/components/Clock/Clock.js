import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {    
    const timerID = setInterval(() => setDate(new Date()), 1000);
    console.log('ComponentDidMount')
    return () => clearInterval(timerID);      
  }, []);

  useEffect(() => {
    if (date !== new Date()) {
      console.log('shouldComponentUpdate');
    }
  }, [date]);
  
  return (
    <div>
      <h2>Clock</h2>
      <p>Привет, мир!</p>
      <p>Сейчас {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;