export default function result({timer,user,original,SelectedTimer}){
	const time=SelectedTimer;
	const userdata=user.split(" ");
	const originaldata=original;
	const wpm=()=>{
		let j=0;
		for (let i=0; i<userdata.length;i++){
			if (userdata[i]==originaldata[i]){
				j=j+userdata[i].length;
			}
			else if (i>=originaldata.length){
				break;
			}
		}
		// return ((j*60)/time);
		let k=Math.floor(((j/5)/time)*60);
		return k;
	}
	return( 
		<div style={{visibility:timer==true?"visible":"hidden"}}  id="result">
			<div id="rescontent">
			{timer==true?wpm():"nigga"} wpm

			<div id="retake">Press 'Ctrl + R' to retake test :p</div>
			</div>
		</div>
	)
}