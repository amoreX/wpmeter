import React, { useEffect, useState } from 'react';
import { generate, count } from "random-words";

const Content = ({SelectedTimer}) => {
  const [content, setContent] = useState([]);
  let [translate,setTranslate] = useState(0);
  let [translate2,setTranslate2] = useState(0);
  
  useEffect(() => {
	setContent(generate(SelectedTimer*5));
  }, [SelectedTimer]);  
  useEffect(() => {
	document.getElementById("customcursor").style.transform=`translate(${translate}px,${translate2}px)`
  },[translate,translate2]);
  const masti= (e) =>{
	setTranslate(prevtrans =>{
		return prevtrans+15;
	});
  }
	
  
	
  return (
    <div id="content">
      {content.map((word,index)=>{
		return(
			<div key={index}> {word}</div>
		)
	  })}

	  <textarea id="usercontent" onKeyDown={(e)=>{
		if (e.key==="Backspace"){
			setTranslate(prevtrans =>{
                return prevtrans<=0? 0 : prevtrans-28
            });
		}
		else if(e.key==="Space"){
			setTranslate(prevtrans =>{
				return prevtrans-3
			})
		}
		else if(e.key==="Enter"){
			setTranslate2(prevtrans2 =>{
				return prevtrans2+30;
			})
			setTranslate(-15);
		}
	  }} onChange={(e)=>{masti(e)}}></textarea>
	  <div id="customcursor"></div>
    </div>
  );
};

export default Content;
