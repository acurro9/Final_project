// Se inician las variables
var volumen;
var currentVideo = 0;
var currentSong = 0;
var multimedia = document.getElementById("player_video");
var videoTime = document.getElementById("progressVideo");
// var videoTime2 = document.getElementById("progressVideo2");
const btnAn = document.getElementById("playBtn");

// Si termina el video se reproduce el siguiente
multimedia.addEventListener("ended", () => {
  manageSRC(1);
});

// Al pulsar en el video
$("#playBtn").on("click", () => {
  // Si no hay ningun video se empieza a reproducir el primer video
  if ($("#background_player").attr("src") == "./images/player/player.png") {
    changeToVideo();
    $("#player_video").attr("src", "./videos/video1.mp4");
    $("#background_player").attr("src", "./images/player/play.png");
    $("#background_player").addClass("play");
    $("#controller_background").css("display", "flex");
    currentVideo = 1;
    multimedia.play();
    btnAnimation();
  } else if (
    // Si el video se está reproduciendo se pone en pause
    $("#background_player").attr("src") == "./images/player/play.png"
  ) {
    $("#background_player").attr("src", "./images/player/pausa.png");
    multimedia.pause();
    btnAnimation();
  } else {
    // Si el video se está en pause se pone en play
    $("#background_player").attr("src", "./images/player/play.png");
    multimedia.play();
    btnAnimation();
  }
});

// Se administra el volumen
$("#volumeInput").on("change", () => {
  multimedia.volume = $("#volumeInput").val() / 100;
});
// Se reproduce el video anterior
$("#back_video_btn").on("click", () => {
  manageSRC(-1);
});
// Se empieza desde el principio el video
$("#beggin").on("click", () => {
  multimedia.currentTime = 0;
});
// Se retrocede 10 segundos
$("#back").on("click", () => {
  multimedia.currentTime -= 10;
});
// Se pone en pausa el video
$("#stop").on("click", () => {
  multimedia.pause();
  multimedia.currentTime = 0;
  $("#background_player").attr("src", "./images/player/pausa.png");
});
// Se avanza 10 segundos
$("#forward").on("click", () => {
  multimedia.currentTime += 10;
});
// Se va al final del video (3 segundos antes)
$("#end").on("click", () => {
  multimedia.currentTime = multimedia.duration - 3;
});
// Se empieza a reproducir el siguiente video
$("#next_video").on("click", () => {
  manageSRC(1);
});
// Se pone en pantalla completa
$("#screen_width").on("click", () => {
  const requestFullscreen =
    multimedia.requestFullscreen ||
    multimedia.mozRequestFullscreen ||
    multimedia.webkitRequestFullscreen;
  if (requestFullscreen) {
    requestFullscreen.call(multimedia);
  } else {
    alert("Tu navegador no soporta la pantalla completa");
  }
});
// Se administra el mute y desmute
$("#volumeBtn").on("click", () => {
  if ($("#volumeInput").val() != 0) {
    volumen = $("#volumeInput").val();
  }
  if ($("#volumeBtn_img").attr("src") == "./images/player/mute.svg") {
    $("#volumeBtn_img").attr("src", "./images/player/volumen.png");
    $("#volumeInput").val(volumen);
    multimedia.volume = volumen / 100;
  } else {
    $("#volumeBtn_img").attr("src", "./images/player/mute.svg");
    $("#volumeInput").val(0);
    multimedia.volume = 0;
  }
});

// Se reproduce el primer video
$("#first_video").on("click", () => {
  changeToVideo();
  $("#player_video").attr("src", "./videos/video1.mp4");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentVideo = 1;
});

// Se reproduce el segundo video
$("#second_video").on("click", () => {
  changeToVideo();
  $("#player_video").attr("src", "./videos/video2.mp4");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentVideo = 2;
});

// Se reproduce el tercer video
$("#third_video").on("click", () => {
  changeToVideo();
  $("#player_video").attr("src", "./videos/video3.mp4");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentVideo = 3;
});

// Se reproduce el cuarto video
$("#four_video").on("click", () => {
  changeToVideo();
  $("#player_video").attr("src", "./videos/video4.mp4");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentVideo = 4;
});

// Se reproduce la primera canción
$("#first_song").on("click", () => {
  changeToMusic();
  $("#player_video").attr("src", "./videos/music1.mp3");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentSong = 1;
});

// Se reproduce la segunda canción
$("#second_song").on("click", () => {
  changeToMusic();
  $("#player_video").attr("src", "./videos/music2.mp3");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentSong = 2;
});

// Se reproduce la tercera canción
$("#third_song").on("click", () => {
  changeToMusic();
  $("#player_video").attr("src", "./videos/music3.mp3");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentSong = 3;
});

// Se reproduce la cuarta canción
$("#four_song").on("click", () => {
  changeToMusic();
  $("#player_video").attr("src", "./videos/music4.mp3");
  $("#background_player").attr("src", "./images/player/play.png");
  multimedia.play();
  currentSong = 4;
});

// Se maneja el cambio de música a video
const changeToVideo = () => {
  $("#player_music").addClass("hidden");
  $("#player_video").removeClass("hidden");
  $("#controller_background").css("display", "flex");
  $("#background_player").removeClass("playMusic");
  $("#background_player").addClass("play");
  currentSong = 0;
};

// Se maneja el cambio de video a música
const changeToMusic = () => {
  $("#player_music").removeClass("hidden");
  $("#controller_background").css("display", "flex");
  $("#background_player").addClass("playMusic");
  $("#background_player").removeClass("play");
  currentVideo = 0;
};

// Se crea el src del video
const createSRC = (type, current, num) => {
  let extension;
  if (current == 1 && num == -1) {
    current = 4;
  } else if (current == 4 && num == 1) {
    current = 1;
  } else {
    current += num;
  }
  switch (type) {
    case "music":
      extension = "mp3";
      break;
    case "video":
      extension = "mp4";
      break;
  }
  return `./videos/${type + current}.${extension}`;
};

// Se administra el src del video
const manageSRC = (num) => {
  if (currentVideo === 0 && currentSong !== 0) {
    $("#player_video").attr("src", createSRC("music", currentSong, num));
    if (currentSong == 1 && num == -1) {
      currentSong = 4;
    } else if (currentSong == 4 && num == 1) {
      currentSong = 1;
    } else {
      currentSong += num;
    }
    changeToMusic();
    multimedia.play();
  } else if (currentVideo !== 0 && currentSong === 0) {
    $("#player_video").attr("src", createSRC("video", currentVideo, num));
    if (currentVideo == 1 && num == -1) {
      currentVideo = 4;
    } else if (currentVideo == 4 && num == 1) {
      currentVideo = 1;
    } else {
      currentVideo += num;
    }
    changeToVideo();
    $("#background_player").attr("src", "./images/player/play.png");
    multimedia.play();
  } else {
    alert("There is nothing reproducing");
  }
};

// Se maneja la barra de progreso del video
multimedia.addEventListener("timeupdate", () => {
  const durationMedia = multimedia.duration;
  const currentTimeMedia = multimedia.currentTime;
  const percentage = (currentTimeMedia / durationMedia) * 100;
  $("#progressVideo").val(percentage);
  // $("#progressVideo2").val(percentage);
  setBackgroundSize(videoTime);
  // setBackgroundSize(videoTime2);
});

// Se maneja el cambio por parte del usuario del progreso del video
$("#progressVideo").on("change", () => {
  const durationVideo = multimedia.duration;
  const minute = $("#progressVideo").val();
  const moment = (minute * durationVideo) / 100;
  multimedia.currentTime = moment;
});

// Se maneja la equivalencio tiempo del video con el input
const setBackgroundSize = (videoTime) => {
  videoTime.style.setProperty(
    "--background-size",
    `${getBackgroundSize(videoTime)}%`
  );
};
// Se calcula el tamaño del fondo del input
const getBackgroundSize = (videoTime) => {
  const min = +videoTime.min || 0;
  const max = +videoTime.max || 100;
  const value = +videoTime.value;

  const size = ((value - min) / (max - min)) * 100;

  return size;
};
// Se maneja el click en el video para mostrar la imagen de pausa y play
const btnAnimation = () => {
  // Cuando se suelta el click del raton
  btnAn.addEventListener("mousedown", function () {
    setTimeout(function () {
      btnAn.classList.remove("active");
      // document.getElementById("background_player").classList.remove("anim");
      $("#background_player").css("width", "50px");
      $("#background_player").css("height", "50px");
    }, 500);
  });
  // Cuando se clicka con el ratón
  btnAn.addEventListener("mouseup", function () {
    btnAn.classList.add("active");
    // document.getElementById("background_player").classList.add("anim");
    $("#background_player").css("width", "100px");
    $("#background_player").css("height", "100px");
  });
};
