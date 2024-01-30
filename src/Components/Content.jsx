import React, { useEffect, useState } from 'react';
import { generate } from "random-words";

const Content = ({ SelectedTimer, wheninput, result, data, color }) => {
  const [content, setContent] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [isFocus, setFocus] = useState(true);
  let [translate, setTranslate] = useState(0);
  let [translate2, setTranslate2] = useState(0); 

  useEffect(() => {
    setContent(generate(SelectedTimer * 5));
  }, [SelectedTimer]);

  useEffect(() => {
    data(content);
  }, [content]);

  useEffect(() => {
    document.getElementById("customcursor").style.transform = `translate(${translate}px,${translate2}px)`;
  }, [translate, translate2]);


  useEffect(()=>{
	const enteredText = userInput.toLowerCase();
	const generatedText = content.join(' ').toLowerCase();
	setIsCorrect(enteredText[enteredText.length - 1]=== generatedText[enteredText.length - 1]);
  },[userInput]);
  const masti = (e) => {
    setUserInput(e.target.value);
	result(e.target.value);
    setTranslate(prevtrans => prevtrans + 15);
  };

  return (
    <div id="content">
      {content.map((word, index) => (
        <span key={index} style={{ color: isCorrect ? 'grey' : 'red' }}>
          {word}
        </span>
      ))}

      <textarea
        autoFocus={isFocus} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} id="usercontent" onInput={() => wheninput()}
        onKeyDown={(e) => {
          if (e.key === 'Backspace') {
            setTranslate(prevtrans => (prevtrans <= 0 ? 0 : prevtrans - 30));
          } else if (e.key === 'Space') {
            setTranslate((prevtrans) => prevtrans - 3);
          } else if (e.key === 'Enter') {
            setTranslate2((prevtrans2) => prevtrans2 + 30);
            setTranslate(-15);
          }
        }}
        onChange={(e) => {
          masti(e);
        }}
      ></textarea>
      <div id="customcursor" style={{ visibility: isFocus ? 'visible' : 'hidden' }}></div>
    </div>
  );
};

export default Content;
