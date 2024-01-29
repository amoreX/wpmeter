import React, { useState, useEffect } from 'react';

export default function Timer({ SelectedTimer,typing }) {
  let initialTimerValue = parseInt(SelectedTimer, 10);
  const [timer, setTimer] = useState(initialTimerValue);

  useEffect(() => {
    let intervalId;
    const startTimer = () => {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    };

    if (typing && timer > 0) {
      startTimer();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer,typing]);

  useEffect(() =>{
	initialTimerValue = parseInt(SelectedTimer, 10);
	setTimer(initialTimerValue);
  },[SelectedTimer]);

  return <div id="timer">0:{timer}</div>;
}
