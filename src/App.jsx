import { useState } from 'react'
import Header from './Components/Timeheader'
import Timer from './Components/Timer'
import './App.css'

function App() {
  const [selectedTimer, setSelectedTimer] = useState('15s');

  const handleTimerChange = (timerValue) => {
    setSelectedTimer(timerValue);
  };

  return (
    <>
      <Header SelectedTimer={selectedTimer} onTimerChange={handleTimerChange} />
      <Timer SelectedTimer={selectedTimer} />
    </>
  )
}

export default App
