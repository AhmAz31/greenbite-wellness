const workouts = {
    full: ["Push-ups", "Squats", "Plank", "Burpees"],
    arms: ["Bicep Curls", "Tricep Dips", "Push-ups"],
    legs: ["Squats", "Lunges", "Calf Raises"],
    core: ["Plank", "Russian Twists", "Leg Raises"]
  };
  
  const equipmentModifier = {
    none: "",
    dumbbells: " with Dumbbells",
    resistance: " with Resistance Bands"
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workoutForm");
    const resultsDiv = document.getElementById("workoutResults");
  
    // Workout generator
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const bodyPart = document.getElementById("bodyPart").value;
      const equipment = document.getElementById("equipment").value;
  
      const exercises = workouts[bodyPart].map(ex => ex + equipmentModifier[equipment]);
      resultsDiv.innerHTML = "";
  
      exercises.forEach((ex, index) => {
        const card = document.createElement("div");
        card.className = "exercise-card";
        card.innerHTML = `
          <h3>${ex}</h3>
          <span class="timer" id="timer${index}">00:30</span>
          <button class="start-btn" id="start${index}">Start</button>
          <button class="stop-btn" id="stop${index}">Stop</button>
        `;
        resultsDiv.appendChild(card);
  
        let time = 30;
        let timerId = null;
  
        const timerElem = document.getElementById(`timer${index}`);
        const startBtn = document.getElementById(`start${index}`);
        const stopBtn = document.getElementById(`stop${index}`);
  
        startBtn.addEventListener("click", () => {
          if (timerId) clearInterval(timerId);
          timerId = setInterval(() => {
            if(time > 0){
              time--;
              timerElem.textContent = `00:${time < 10 ? "0"+time : time}`;
            } else {
              clearInterval(timerId);
            }
          }, 1000);
        });
  
        stopBtn.addEventListener("click", () => {
          if(timerId) clearInterval(timerId);
        });
      });
    });
  });
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
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