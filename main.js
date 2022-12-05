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
