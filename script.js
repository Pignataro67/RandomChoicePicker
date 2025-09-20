const resetBtn = document.querySelector('#reset');
const playBtn = document.querySelector('#play');
const timerEl = document.querySelector('#timer');
const root = document.querySelector(':root');

// Initial setup
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

const timerInterval = setInterval(run, 1000);

playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('bg-green-500'); // Toggle the color class
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.toggle('fa-play'); // Toggle the play icon
  playIcon.classList.toggle('fa-pause'); // Toggle the pause icon
});
resetBtn.addEventListener('click', resetAll);
