import { useState } from 'react'
import Header from './Components/Timeheader'
import Timer from './Components/Timer'
import Content from './Components/Content'
import './App.css'
import axios from 'axios'


function App() {
  const [selectedTimer, setSelectedTimer] = useState('10s');
  const [isTyping, setIsTyping] = useState(false);

  const handleTimerChange = (timerValue) => {
    setSelectedTimer(timerValue);
  };
  const handleTypingStart = () => {
    setIsTyping(true);
  };

  return (
    <>
      <Header SelectedTimer={selectedTimer} onTimerChange={handleTimerChange} />
      <Timer SelectedTimer={selectedTimer} typing={isTyping} />
      <Content SelectedTimer={parseInt(selectedTimer, 10)} wheninput={handleTypingStart}/>
    </>
  )
}

export default App
