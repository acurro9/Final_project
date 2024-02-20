//Añadir la clase que realiza la animación
var addLogoSpin = () => {
  $("#index_logo").addClass("index_logo_spin");
};
//Eliminar la clase que realiza la animación
var removeLogoSpin = () => {
  $("#index_logo").removeClass("index_logo_spin");
};
//Recargar el elemento con id index_logo
var triggerReflow = () => {
  $("#index_logo").width();
};
//Animación de la nieve
var snow = () => {
  var duration = 15 * 250;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
};
//Animación de fuegos artificiales
var fireworks = () => {
  var duration = 15 * 250;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

//Animación de rotación del logo
function logoSpin() {
  // reset animation
  removeLogoSpin();
  // trigger reflow
  triggerReflow();
  // start animation
  addLogoSpin();
}
//Animación que realiza el logo
function btn_animation() {
  // fireworks();
  // logoSpin();
  snow();
}

//En caso de hacer scroll y haber aceptado las cookies nos redirige a otra página
window.addEventListener("wheel", function () {
  if (localStorage.getItem("cookies-aceptadas")) {
    window.location.href = "http://127.0.0.1:1337/aboutMe";
  }
});
