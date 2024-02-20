//Cookies banner
const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");
const pagarCookies = document.getElementById("btn-pagar-cookies");

//Con google tag manager creamos un evento de que cree las cookies cuando sean aceptadas, el dataLayer es de eso

if (!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
  fondoAvisoCookies.classList.add("activo");
}

botonAceptarCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");

  localStorage.setItem("cookies-aceptadas", true);
});

pagarCookies.addEventListener("click", () => {
  alert("Te la creiste. \nAcepta las cookies.");
});
