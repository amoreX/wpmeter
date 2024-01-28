import React, { useState } from 'react';

export default function Time({SelectedTimer,onTimerChange}) {
  
	return (
	  <div id="header">
		{['5s', '10s', '15s', '30s'].map((timerValue) => (
		  <div
			key={timerValue}
			id="headerelement"
			onClick={() => onTimerChange(timerValue)}
			style={{ color: SelectedTimer === timerValue ? '#e2b514' : '#e2b51462' }}
		  >
			{timerValue}
		  </div>
		))}
	  </div>
	);
  }
  
