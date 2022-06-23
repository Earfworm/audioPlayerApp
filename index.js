const song = document.querySelector(".song");
const playBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const progressBar = document.querySelector(".progress-bar");
const muteBtn = document.querySelector(".mute");
const songVolume = document.querySelector(".volume");
const audioPlayer = document.querySelector(".audio-player");
let songTime = document.querySelector(".current-time");
let songDuration = document.querySelector(".duration");
let count = 0;


playBtn.addEventListener("click", playSong);
stopBtn.addEventListener("click", stopSong);
muteBtn.addEventListener("click", muteOrUnmute);
song.addEventListener("ended", () => {console.log("song has ended")});
songVolume.addEventListener("change", volumeSlider);
song.addEventListener("timeupdate",playTimeUpdate)



function playSong(){
    if (count === 0){
        count = 1;
    song.play();
    playBtn.innerHTML = "Play"
    console.log("song playing")
    } else {
        count = 0;
        song.pause();
        playBtn.innerHTML = "Pause"
        console.log("song pause")
    }
   
}

function stopSong(){
   song.pause();
    song.currentTime = 0;
console.log("stop playing song")
  }

  function seekBar(){
    progressBar.min = song.startTime;
    progressBar.max = song.startTime + song.duration;
  }
  
  song.ondurationchange = seekBar;
  
  function seekAudio(){
    song.currentTime = progressBar.value;

  }

  function songProgress(){
    song.currentTime = progressBar.value;

  }

  function updateUI(){
progressBar.value = song.currentTime;

  } 
  progressBar.onchange = songProgress;
  song.ontimeupdate = updateUI;

  function muteOrUnmute(){
if(song.muted === true){
    song.muted = false

} else {
    song.muted = true;
    console.log("song muted");
}
}

function volumeSlider(){
song.volume = songVolume.value /100;


}

function playTimeUpdate(){
  if(song.duration){
    let currentMinutes = Math.floor(song.currentTime / 60);
    let currentSeconds = Math.floor(song.currentTime - currentMinutes
      * 60);
      let durationMinutes = Math.floor(song.duration / 60);
      let durationSeconds = Math.floor(song.duration - durationMinutes
      * 60);
    
        if(durationSeconds < 10){
          durationSeconds = "0" + durationSeconds;
        } 
        if(durationMinutes < 10){
          durationMinutes = "0" + durationMinutes;
        } 
        if(currentMinutes < 10){
          currentMinutes = "0" + currentMinutes;
        } 
        if(currentSeconds < 10){
          currentSeconds = "0" + currentSeconds;
        } songTime.innerHTML = currentMinutes + ":" + currentSeconds;
        songDuration.innerHTML = durationMinutes + ":" + durationSeconds;
  } else{ 
    songTime.innerHTML = "00" + ":" + "00";
    songDuration.innerHTML = "00" + ":" + "00";
  }

    

}







/*
controlling the audio player with javascript

1. Import Variables
2. Create Functions for audio player.
3. addEventListner's for buttons.

Media Player Needs

1.a play/pause button,
2.a seek slider,
3.the current time indicator,
4.the duration of the sound file,
5.a way to mute the audio, and
6.a volume control slider.


*/












// var audio, playBtn, seek_bar;

// function initAudioPlayer() {
//     audio = new Audio();
//     audio.src = "audioForMusicApp/SOYL.mp3"
//     audio.loop = true;
//     audio.play();


// }

// window.addEventListener("load", initAudioPlayer)
// const btns = (".buttons")
// const play = document.querySelector(".play");
// const rewind = document.querySelector(".rewind");
// const fastForward = document.querySelector(".fast-forward");
// const repeat = document.querySelector(".Shuffle-Repeat");
// const mute = document.querySelector(".mute");
// const togglePlayer = document.querySelector('.playback-bar');
// const volume = document.querySelector(".volume");
// const current = document.querySelector(".current-time");
// const duration = document.querySelector(".duration")
// const playbackBar = document.querySelector(".playback-bar")






