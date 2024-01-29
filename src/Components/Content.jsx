import React, { useEffect, useState } from 'react';
import { generate, count } from "random-words";

const Content = ({SelectedTimer,wheninput}) => {
  const [content, setContent] = useState([]);
  let [translate,setTranslate] = useState(0);
  let [translate2,setTranslate2] = useState(0);
  let [userdata,setUserdata] = useState("");
  useEffect(() => {
	setContent(generate(SelectedTimer*5));
  }, [SelectedTimer]);  
  useEffect(() => {
	document.getElementById("customcursor").style.transform=`translate(${translate}px,${translate2}px)`
  },[translate,translate2]);
  const masti= (e) =>{
	setUserdata(e.target.value);
	console.log(e.target.value);
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

	  <textarea id="usercontent" onInput={() => wheninput()} onKeyDown={(e)=>{
		if (e.key==="Backspace"){
			setTranslate(prevtrans =>{
                return prevtrans<=0? 0 : prevtrans-30
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
