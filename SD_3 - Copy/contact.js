// Feedback Form Submission
const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

feedbackForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name && email && message){
    const feedback = {name, email, message, date: new Date().toISOString()};
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    feedbackMessage.textContent = "Thank you! Your feedback has been submitted.";
    feedbackForm.reset();
  } else {
    feedbackMessage.textContent = "Please fill in all fields!";
  }
});

// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('transition-page')) {
    document.body.classList.add('loaded');
  }
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