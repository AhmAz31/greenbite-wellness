document.getElementById("calcForm").addEventListener("submit", function(e){
    e.preventDefault();
  
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
  
    // Calculate BMR
    let bmr;
    if(gender === "male") {
      bmr = 10*weight + 6.25*height - 5*age + 5;
    } else {
      bmr = 10*weight + 6.25*height - 5*age - 161;
    }
  
    // Calculate TDEE
    const tdee = bmr * activity;
  
    // Macronutrients
    const carbs = ((tdee*0.5)/4).toFixed(1);
    const protein = ((tdee*0.2)/4).toFixed(1);
    const fat = ((tdee*0.3)/9).toFixed(1);
  
    // Display results
    document.getElementById("bmrValue").textContent = bmr.toFixed(0);
    document.getElementById("tdeeValue").textContent = tdee.toFixed(0);
    document.getElementById("carbsValue").textContent = carbs;
    document.getElementById("proteinValue").textContent = protein;
    document.getElementById("fatValue").textContent = fat;
  
    // Animate progress bars
    const maxWidth = 100;
    document.getElementById("carbsBar").style.width = (carbs/200*maxWidth) + "%";
    document.getElementById("proteinBar").style.width = (protein/100*maxWidth) + "%";
    document.getElementById("fatBar").style.width = (fat/80*maxWidth) + "%";
  
    document.getElementById("results").style.display = "block";
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