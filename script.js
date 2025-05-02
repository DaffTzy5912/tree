const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

let playing = false;

playBtn.addEventListener('click', () => {
  if (playing) {
    audio.pause();
    playBtn.textContent = '▶';
  } else {
    audio.play();
    playBtn.textContent = '⏸';
  }
  playing = !playing;
});

audio.addEventListener('timeupdate', () => {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  currentTime.textContent = `${minutes}:${seconds}`;
});

audio.addEventListener('loadedmetadata', () => {
  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
  duration.textContent = `${totalMinutes}:${totalSeconds}`;
});
