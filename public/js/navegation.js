// Sesión no iniciada
var navOut = ["Index", "About me", "Projects", "Contact", "Player", "Log In"];
var navOutRef = ["/", "/aboutMe", "/projects", "/contact", "/player", "/login"];

// Sesión iniciada como user
var navIn = [
  "Index",
  "About me",
  "Projects",
  "Contact",
  "Player",
  "Preferences",
  "Log Out",
];
var navInRef = [
  "/",
  "/aboutMe",
  "/projects",
  "/contact",
  "/player",
  "/preferences",
  "/logout",
];

// Sesión iniciada como admin
var navInAdmin = [
  "Index",
  "About me",
  "Projects",
  "Contact",
  "Player",
  "Admin",
  "Log Out",
];
var navInRefAdmin = [
  "/",
  "/aboutMe",
  "/projects",
  "/contact",
  "/player",
  "/admin",
  "/logout",
];

// Se añade el navegador en el menú
function createNav(nav, navRef) {
  let menuNav = document.getElementById("menuNav");
  let ul = document.createElement("ul");
  ul.setAttribute("id", "menuNav2");
  ul.setAttribute("class", "menu");
  for (let i = 0; i < nav.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let aText = document.createTextNode(nav[i]);
    a.appendChild(aText);
    a.setAttribute("href", `${navRef[i]}`);

    li.appendChild(a);
    ul.appendChild(li);
  }
  menuNav.appendChild(ul);
}

// Se administra el navegador
if (sessionStorage.getItem("login")) {
  createNav(navIn, navInRef);
} else if (sessionStorage.getItem("loginAdmin")) {
  createNav(navInAdmin, navInRefAdmin);
} else {
  createNav(navOut, navOutRef);
}
