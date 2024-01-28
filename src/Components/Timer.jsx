export default function timer({SelectedTimer}) {
	const timervalue = parseInt(SelectedTimer, 10);
	return(
		<div id="timer">0:{timervalue}</div>
	)
}