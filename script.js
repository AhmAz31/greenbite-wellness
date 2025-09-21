// Hamburger menu (if you add one later)
const hamburger = document.getElementById('hamburger');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('show');
    navRight.classList.toggle('show');
  });
}

// Health slogans
const slogans = [
  "Eat Healthy, Live Happy",
  "Stay Hydrated, Stay Strong",
  "Mindfulness is Key",
  "Nature is the Best Medicine",
  "Exercise Daily for a Better Life"
];

let sloganIndex = 0;
const heroSlogan = document.getElementById('hero-slogan');

function showSlogan() {
  heroSlogan.classList.remove('show');
  heroSlogan.classList.add('fade');

  setTimeout(() => {
    heroSlogan.textContent = slogans[sloganIndex];
    heroSlogan.classList.remove('fade');
    heroSlogan.classList.add('show');
    sloganIndex = (sloganIndex + 1) % slogans.length;
  }, 500);
}

// Initialize first slogan
heroSlogan.textContent = slogans[sloganIndex];
heroSlogan.classList.add('show');
sloganIndex++;
setInterval(showSlogan, 5000);

// Daily tip
const tips = [
  "Drink at least 8 glasses of water.",
  "Include fruits in your breakfast.",
  "Take a 10-minute walk after lunch.",
  "Practice deep breathing.",
  "Avoid sugary drinks."
];

const dailyTip = document.getElementById('daily-tip');
dailyTip.textContent = "Health Tip: " + tips[new Date().getDate() % tips.length];
dailyTip.classList.add('show');

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email) return alert("Please enter an email address.");
  let storedEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];
  storedEmails.push(email);
  localStorage.setItem('newsletterEmails', JSON.stringify(storedEmails));
  alert("Subscribed successfully!");
  newsletterForm.reset();
});

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade');   // start hidden
  setTimeout(() => {
    document.body.classList.add('loaded'); // fade in
  }, 10); // slight delay so transition runs
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


