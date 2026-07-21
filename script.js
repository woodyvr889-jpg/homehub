// NAV
function go(page) {
  window.location.href = page;
}

// TOGGLES
let lightOn = false;
let plugOn = false;

function toggleLight() {
  lightOn = !lightOn;
  document.getElementById("lightStatus").innerText = lightOn ? "ON" : "OFF";
}

function togglePlug() {
  plugOn = !plugOn;
  document.getElementById("plugStatus").innerText = plugOn ? "ON" : "OFF";
}

// CLOCK
function updateTime() {
  const now = new Date();

  if (document.getElementById("topTime")) {
    document.getElementById("topTime").innerText = now.toLocaleTimeString();
  }
}
setInterval(updateTime, 1000);

// COUNTDOWN
function updateCountdown() {
  const target = new Date();
  target.setHours(24,0,0,0);
  const now = new Date();
  const diff = target - now;

  const hrs = Math.floor(diff / 1000 / 60 / 60);
  const mins = Math.floor(diff / 1000 / 60 % 60);
  const secs = Math.floor(diff / 1000 % 60);

  const el = document.getElementById("countdown");
  if (el) {
    el.innerText = `${hrs}h ${mins}m ${secs}s`;
  }
}
setInterval(updateCountdown, 1000);

// SLIDESHOW MODE
let slideIndex = 0;

function runSlideshow() {
  const el = document.getElementById("slide");
  if (!el) return;

  setInterval(() => {
    const now = new Date();

    const slides = [
      `<div class="bigTime">${now.toLocaleTimeString()}</div><div>Time</div>`,
      `<div class="bigText">Welcome Home</div>`,
      `<div>${now.toLocaleDateString()}</div><div>Date</div>`
    ];

    el.innerHTML = slides[slideIndex];
    slideIndex = (slideIndex + 1) % slides.length;

  }, 3000);
}

runSlideshow();

// SETTINGS
function setTheme(mode) {
  document.body.style.background =
    mode === "light" ? "#f1f5f9" : "#0f172a";
}

function resetHub() {
  location.reload();
}
