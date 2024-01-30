import React, { useState } from 'react';

export default function Time({SelectedTimer,onTimerChange,colour,colorfocus}) {
  
	return (
	  <div id="header">
		{['5s', '10s', '15s', '30s'].map((timerValue) => (
		  <div
			key={timerValue}
			id="headerelement"
			onClick={() => onTimerChange(timerValue)}
			style={{ color: SelectedTimer === timerValue ? colorfocus : 'grey' }}
		  >
			{timerValue}
		  </div>
		))}
	  </div>
	);
  }
  
