import React, { useState } from 'react';
const timerValues = ['15s', '30s', '45s', '60s'];

export default function Time({SelectedTimer,onTimerChange}) {
  
	return (
	  <div id="header">
		{['15s', '30s', '45s', '60s'].map((timerValue) => (
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
  
