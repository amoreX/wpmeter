import { useState } from 'react'
import Header from './Components/Timeheader'
import Timer from './Components/Timer'
import Content from './Components/Content'
import Result from './Components/Result'
import './App.css'
import axios from 'axios'


function App() {
  const [selectedTimer, setSelectedTimer] = useState('10s');
  const [isTyping, setIsTyping] = useState(false);
  const [istimerover,setTimerover] = useState(false);
  const [userdata,setUserdata] = useState("");
  const [originaldata,setOriginaldata]=useState([]);
  const handleTimerChange = (timerValue) => {
    setSelectedTimer(timerValue);
  };
  const handleTypingStart = () => {
    setIsTyping(true);
  };
  const handleTimerover=() =>{
    setTimerover(true);
  }
  const handleuserdata=(input)=>{
    setUserdata(input);
  }
  const handleOriginaldata=(input)=>{
    setOriginaldata(input);
  }

  return (
    <>
      <Header SelectedTimer={selectedTimer} onTimerChange={handleTimerChange} />
      <Timer SelectedTimer={selectedTimer} typing={isTyping} whentimeover={handleTimerover} />
      <Content SelectedTimer={parseInt(selectedTimer, 10)} wheninput={handleTypingStart} result={handleuserdata} data={handleOriginaldata}/>
      <Result SelectedTimer={parseInt(selectedTimer, 10)} timer={istimerover} user={userdata} original={originaldata}/>
    </>
  )
}

export default App
