import { useState,useEffect } from 'react'
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
  const [rotate,setRotation] = useState(60);
  const [theme,setTheme]=useState(0);
  const bgcolor=['#1a1b1df0','#1a1b1df0'];
  const timercolor=['#e2b514','#452F27'];
  const timerunhighlight=['#e2b51462','F4D5BF'];
  const svgcolor=['#e2b514','#E59D9A'];
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
  const handlesvgclick=() =>{
    setRotation(prevdata =>{ return prevdata+60})
    document.getElementById('themes').style.transform=`rotate(${rotate}deg)`;
    setTheme(prevdata =>{
      return prevdata+1<2?prevdata+1:0;
    })
  }
  useEffect(() =>{
    document.getElementById('timer').style.color= timercolor[theme];
    document.getElementById('themes').style.backgroundColor= svgcolor[theme];
    document.body.style.background = bgcolor[theme];
  },[theme])

  return (
    <>
      <Header SelectedTimer={selectedTimer} onTimerChange={handleTimerChange} colour={timerunhighlight[theme]}  colorfocus={timercolor[theme]}/>
      <Timer SelectedTimer={selectedTimer} typing={isTyping} whentimeover={handleTimerover} />
      <Content SelectedTimer={parseInt(selectedTimer, 10)} wheninput={handleTypingStart} result={handleuserdata} data={handleOriginaldata}/>
      <div id="themes" onClick={handlesvgclick}>
        <svg width="30px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Result SelectedTimer={parseInt(selectedTimer, 10)} timer={istimerover} user={userdata} original={originaldata}/>
    </>
  )
}

export default App
