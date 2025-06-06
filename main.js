// Get the audio
var presentacion = document.getElementById("saludoPresentacion");

// Get the button
var helloDan = document.getElementById("hello");

// Pause and play the audio, and change the img text
function miPresentacion() {
  if (presentacion.paused) {
    presentacion.play();
    helloDan.innerHTML = "PAUSE";
  } else {
    presentacion.pause();
    helloDan.innerHTML = "PLAY";
  }
}

// Profile image interaction
const profileImg = document.getElementById("hello");
let clickCount = 0;

profileImg.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    this.style.transform = "scale(1.1) rotate(5deg)";
    setTimeout(() => {
      this.style.transform = "scale(1) rotate(0deg)";
    }, 300);
  } else if (clickCount === 2) {
    this.style.transform = "scale(1.15) rotate(-5deg)";
    this.style.filter = "hue-rotate(180deg)";
    setTimeout(() => {
      this.style.transform = "scale(1) rotate(0deg)";
      this.style.filter = "none";
      clickCount = 0;
    }, 500);
  }
});

// Add floating animation to social links
document.querySelectorAll(".social-link").forEach((link, index) => {
  link.style.animationDelay = `${index * 0.1}s`;
});

// Add subtle parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const background = document.querySelector(".header");
  background.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add ripple effect to buttons
document.querySelectorAll(".cta-btn, .action-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.pointerEvents = "none";

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
