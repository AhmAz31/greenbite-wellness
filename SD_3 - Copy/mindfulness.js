// --- Breathing Exercise ---
const circle = document.querySelector('.circle');
const text = document.getElementById('breathing-text');
const startBreathingBtn = document.getElementById('start-breathing');
const stopBreathingBtn = document.getElementById('stop-breathing');

let breathingInterval;

function breatheCycle() {
  text.textContent = "Inhale...";
  circle.style.transform = "scale(1.5)";
  setTimeout(() => {
    text.textContent = "Exhale...";
    circle.style.transform = "scale(1)";
  }, 4000);
}

startBreathingBtn.addEventListener('click', () => {
  clearInterval(breathingInterval);
  breatheCycle();
  breathingInterval = setInterval(breatheCycle, 8000);
});

stopBreathingBtn.addEventListener('click', () => {
  clearInterval(breathingInterval);
  text.textContent = "Press start to begin";
  circle.style.transform = "scale(1)";
});

// --- Meditation Timer ---
const durationInput = document.getElementById('duration');
const timerDisplay = document.getElementById('timer-display');
const sessionLog = document.getElementById('session-log');
const startMeditationBtn = document.getElementById('start-meditation');
const pauseMeditationBtn = document.getElementById('pause-meditation');
const resetMeditationBtn = document.getElementById('reset-meditation');

let timerInterval, remaining, isPaused = false;

function startMeditation() {
  if (!isPaused) {
    const duration = parseInt(durationInput.value) * 60;
    if (isNaN(duration) || duration <= 0) {
      alert("Enter a valid meditation time.");
      return;
    }
    remaining = duration;
  }
  isPaused = false;

  function updateTimer() {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    timerDisplay.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Session Complete 🎉";
      saveSession();
    }
    remaining--;
  }

  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseMeditation() {
  clearInterval(timerInterval);
  isPaused = true;
}

function resetMeditation() {
  clearInterval(timerInterval);
  isPaused = false;
  timerDisplay.textContent = "";
}

function saveSession() {
  let sessions = JSON.parse(localStorage.getItem("meditationSessions")) || [];
  const now = new Date().toLocaleString();
  sessions.push({ time: now, duration: durationInput.value });
  localStorage.setItem("meditationSessions", JSON.stringify(sessions));
  sessionLog.textContent = `Last session: ${durationInput.value} min on ${now}`;
}

startMeditationBtn.addEventListener('click', startMeditation);
pauseMeditationBtn.addEventListener('click', pauseMeditation);
resetMeditationBtn.addEventListener('click', resetMeditation);

// --- Ambient Sounds ---
const sounds = {
  rain: new Audio("sounds/rain.mp3"),
  ocean: new Audio("sounds/ocean.mp3"),
  forest: new Audio("sounds/forest.mp3")
};
Object.values(sounds).forEach(s => s.loop = true);

document.querySelectorAll('.sound-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const sound = btn.dataset.sound;
    if (sounds[sound].paused) {
      sounds[sound].play();
      btn.classList.add("active");
    } else {
      sounds[sound].pause();
      btn.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // how far from bottom before triggering

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // remove if you want to re-trigger
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade');   // start hidden
  setTimeout(() => {
    document.body.classList.add('loaded'); // fade in
  }, 10); // slight delay so transition runs
});
