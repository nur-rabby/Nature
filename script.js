function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const hamburger = document.getElementById("hamburger");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");

  hamburger.innerHTML = menu.classList.contains("active") ? "&#10006;" : "&#9776;";
}

document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text-item");
  let index = 0;

  setInterval(() => {
    texts.forEach(t => t.classList.remove("active"));
    texts[index].classList.add("active");
    index = (index + 1) % texts.length;
  }, 3000);

  const faders = document.querySelectorAll('.fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));

  // Unmute button logic
  const video = document.getElementById('bgVideo');
  const unmuteBtn = document.getElementById('unmuteBtn');

  unmuteBtn.addEventListener('click', () => {
    video.muted = false;
    video.volume = 0.5; // Set volume lower if you want
    unmuteBtn.style.display = 'none'; // Hide button after click
  });
});
