import { useState } from 'react'
import Header from './Components/Timeheader'
import Timer from './Components/Timer'
import Content from './Components/Content'
import './App.css'
import axios from 'axios'


function App() {
  const [selectedTimer, setSelectedTimer] = useState('10s');

  const handleTimerChange = (timerValue) => {
    setSelectedTimer(timerValue);
  };

  return (
    <>
      <Header SelectedTimer={selectedTimer} onTimerChange={handleTimerChange} />
      <Timer SelectedTimer={selectedTimer} />
      <Content SelectedTimer={parseInt(selectedTimer, 10)}/>
    </>
  )
}

export default App
