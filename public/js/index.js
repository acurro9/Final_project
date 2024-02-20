//Cambiar clases dependiendo del width
$(window).resize(() => {
  try {
    if ($(window).width() <= 900) {
      showMenuP();
      hideMenuNav();
      showMenuImg();
      showBtnM();
      hideBtnC();

      changeCSS(".footer", "justify-content", "center");
      changeCSS(".footer", "height", "15vh");
      changeCSS("#footer_menu", "display", "none");
      changeCSS(".projects_project", "margin-top", "10vh");
      changeCSS("#head_menu", "height", "10vh");

      changeCSS("#head_menu", "background-color", "transparent");
      changeCSS("#head_menu", "backdrop-filter", "none");
      changeCSS("#head_menu", "box-shadow", "none");
      changeCSS("#head_menu", "border", "none");
    } else {
      changeCSS(".footer", "justify-content", "space-between");
      changeCSS(".footer", "height", "10%");
      changeCSS("#footer_menu", "display", "inline");
      changeCSS(".projects_project", "margin-top", "26vh");

      changeCSS("#head_menu", "background-color", "transparent");
      changeCSS("#head_menu", "backdrop-filter", "none");
      changeCSS("#head_menu", "box-shadow", "none");
      changeCSS("#head_menu", "border", "none");
      hideMenuP();
      showMenuNav();
      hideMenuImg();
      hideBtnM();
      checkWidth();
      hideBtnC();
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
  //En caso de width menor o igual a 900px
});

//Muestra u oculta el menú desplegable
let displayX = $("#menuNav2");
let btnM = $("#btnM");
let btnC = $("#btnC");
//Botón para abrir menú
btnM.on("click", () => {
  try {
    hideMenuP();
    showMenuNav();
    hideBtnM();
    showBtnC();
    showMenuImgC();
    changeCSS("#head_menu", "background-color", "rgba(0, 0, 0, 0.6)");
    changeCSS("#head_menu", "backdrop-filter", "blur(5px)");
    changeCSS("#head_menu", "box-shadow", "0 0 40px rgba(8, 7, 16, 0.6)");
    changeCSS("#head_menu", "border", "2px solid rgba(255, 255, 255, 0.1)");
    changeCSS("#head_menu", "height", "15vh");
    if ($(window).width() <= 900) {
      changeCSS("#head_menu", "height", "100%");
      changeCSS("#menuNavv2", "margin-top", "10rem");
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
});
//Botón para cerrar el menú
btnC.on("click", () => {
  try {
    showMenuP();
    hideMenuNav();
    showBtnM();
    hideBtnC();
    hideMenuImgC();

    changeCSS("#head_menu", "background-color", "transparent");
    changeCSS("#head_menu", "backdrop-filter", "none");
    changeCSS("#head_menu", "box-shadow", "none");
    changeCSS("#head_menu", "border", "none");

    //En caso de width menor o igual a 900pxs
    if ($(window).width() <= 900) {
      changeCSS("#head_menu", "height", "10vh");
      changeCSS("#menuNavv2", "margin-top", "0");
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
});

//Cambiar el menú al hacer scroll
window.addEventListener("scroll", () => {
  try {
    if ($(window).width() > 900) {
      //En caso de no estar en el top de la página
      if ($(window).scrollTop() === 0) {
        hideMenuP();
        hideMenuImg();
        hideBtnM();
        showMenuP2();
        showMenuNav();
        hideMenuImgC();
        hideBtnC();
        changeCSS("#head_menu", "height", "23vh");
        changeCSS("#head_menu", "background-color", "transparent");
        changeCSS("#head_menu", "backdrop-filter", "none");
        changeCSS("#head_menu", "box-shadow", "none");
        changeCSS("#head_menu", "border", "none");
      } else {
        showMenuP();
        showMenuImg();
        showBtnM();
        hideMenuP2();
        hideMenuNav();
        hideMenuImgC();
        hideBtnC();
        changeCSS("#head_menu", "height", "10vh");
        changeCSS("#head_menu", "background-color", "transparent");
        changeCSS("#head_menu", "backdrop-filter", "none");
        changeCSS("#head_menu", "box-shadow", "none");
        changeCSS("#head_menu", "border", "none");
      }
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
  //En caso de width mayor a 900px
});
//Chequea el width al cargar la página para cambiar el menú
const checkWidth = () => {
  try {
    //En caso de width menor o igual a 900px
    if ($(window).width() <= 900) {
      hideMenuNav();
      showMenuImg();
      showMenuP();
      showBtnM();

      changeCSS("#head_menu", "height", "10vh");
      changeCSS(".projects_project", "margin-top", "2vh");
      changeCSS(".projects_project", "background-color", "transparent");
      changeCSS(".projects_project", "backdrop-filter", "none");
      changeCSS(".projects_project", "box-shadow", "none");
      changeCSS(".projects_project", "border", "none");
      changeCSS("#footer_menu", "display", "none");
      changeCSS(".footer", "justify-content", "center");
      changeCSS(".footer", "height", "15vh");
      changeCSS("#head_menu", "background-color", "transparent");
      changeCSS("#head_menu", "backdrop-filter", "none");
      changeCSS("#head_menu", "box-shadow", "none");
      changeCSS("#head_menu", "border", "none");
    } else {
      //En caso de no estar en el top de la página
      if ($(window).scrollTop() !== 0) {
        hideMenuNav();
        showMenuImg();
        showBtnM();
        showMenuP();
        hideMenuP2();

        changeCSS("#head_menu", "height", "10vh");
        changeCSS(".projects_project", "margin-top", "26vh");
        changeCSS("#footer_menu", "display", "visible");
        changeCSS(".footer", "height", "10%");
        changeCSS(".footer", "justify-content", "space-between");
        changeCSS("#head_menu", "background-color", "transparent");
        changeCSS("#head_menu", "backdrop-filter", "none");
        changeCSS("#head_menu", "box-shadow", "none");
        changeCSS("#head_menu", "border", "none");
      }
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
};
//Widget google maps
(() => {
  var setting = {
    query: "Calle Ana Benítez, 15, Las Palmas de Gran Canaria, España",
    width: 800,
    height: 400,
    satellite: false,
    zoom: 16,
    placeId: "ChIJa0hXg7mVQAwRuSYnHABVhm4",
    cid: "0x6e8655001c2726b9",
    coords: [28.0976547, -15.4393596],
    lang: "es",
    queryString: "Calle Ana Benítez, 15, Las Palmas de Gran Canaria, España",
    centerCoord: [28.0976547, -15.4393596],
    id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
    embed_id: "1038885",
  };
  var d = document;
  var s = d.createElement("script");
  s.src = "https://1map.com/js/script-for-user.js?embed_id=1038885";
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting);
  };
  var to = d.getElementsByTagName("script")[0];
  to.parentNode.insertBefore(s, to);
})();
