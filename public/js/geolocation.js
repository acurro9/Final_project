// Se guarda la localización en un cookie y se añade a la página un mapa con la localización
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition((position) => {
    let pos = [position.coords.latitude, position.coords.longitude];
    document.cookie = "position=" + pos + ";expires=365;path=/";

    $("#about_location").removeClass("hidden");
    $("#about_location").addClass("visible");

    var map = L.map("map").setView(pos, 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker = L.marker(pos).addTo(map);

    var circle = L.circle([28.0975615, -15.4394923], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(map);
  });
} else {
  alert("¡Lo sentimos mucho! Tu navegador no soporta esta característica");
}
