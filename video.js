var video;
// page load to run off autoplay and looping
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false; 
	console.log("Auto play is set to " + video.autoplay);
	video.loop = false; 
	console.log("Loop is set to " + video.loop);
	let volumeDisplay = document.querySelector("#volume");
	volumeDisplay.innerText = "100%";
	console.log("Initial volume: " + volumeDisplay.innerText);

});

//play video button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let play_video = document.querySelector("#player1");
	play_video.play();
	console.log("Play video is set to " + !play_video.paused);
	// let volume = document.querySelector("#slider")
	// volume.volume;
	// console.log("The volume is going to be " + volume.volume);
});

//pause video button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	let pause_video = document.querySelector("#player1");
	pause_video.pause();
	console.log("Pause video is set to " + pause_video.paused);
});

//volume slider, uses change since it's a nonclickable event
document.addEventListener("change", function(){

	//console.log("There is something here");
	let slider = document.querySelector("#slider");
	let video = document.querySelector("#player1");
	let update_vol = slider.value / 100;

	video.volume = update_vol;

	//Updating the "Volume is: " information
	document.querySelector("#volume").innerText = (video.volume*100) + "%";
	
	console.log("Volume updated to " + video.volume);

	// Update the span of volume
	let volumeDisplay = document.querySelector("#volume");
	volumeDisplay.innerText = slider.value + "%";

	console.log("Volume span says: " + volumeDisplay.innerText);
});

//slow down button
document.querySelector("#slower").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	video.playbackRate *= 0.9;
	console.log("New speed after slowing down: " + video.playbackRate);
	//defaultPlaybackRate
});

//speed up button
document.querySelector("#faster").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("New speed after speeding up: " + video.playbackRate);
});

//skip ahead button
document.querySelector("#skip").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
		console.log("Video has exceeded the length duration, restarting video. ");
	}else{
		video.currentTime += 10;
		console.log("Skipping video by 10 seconds. Current time: "+ video.currentTime); 
	}
});

//mute button
document.querySelector("#mute").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	let mute_button  = document.querySelector("#mute");
	//set the video to unmute, since the text button is automatically "Mute"
	video.muted = !video.muted;
	//checking if video is unmuted, always unmuted at the start
	if(video.muted){
		mute_button.textContent = "Unmute";
		console.log("Video is unmuted");
	}else{
		mute_button.textContent = "Mute";
		console.log("VIdeo is muted");
	}

});

//"oLD school" style button
document.querySelector("#vintage").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	video.classList.add("oldSchool");
	console.log("Old School style applied.");
	// if (video.classList.add("oldSchool")){
	// 	console
	// }
	// console.log("Old School style is applied.")
});

// "Original" style button
document.querySelector("#orig").addEventListener("click", function(){
	let video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
	console.log("Old School style removed.");
});