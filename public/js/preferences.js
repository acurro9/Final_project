// Se añaden preferencias
const addPreferences = async () => {
  let name = $("#input_name_question").val();
  let background = $("#input_background_question").val();
  let letter = $("#input_letter_question").val();
  const regVal = /^[a-zA-Z-' ]+$/;

  // Para input text
  // if (
  //   (await validate(regVal, name)) &&
  //   (await validate(regVal, background)) &&
  //   (await validate(regVal, letter))
  // ) {
  // Para input color
  if (await validate(regVal, name)) {
    let jsonData = {
      username: name,
      background: background,
      letter: letter,
    };
    let jsonStr = JSON.stringify(jsonData);

    localStorage.setItem("Preferences", jsonStr);
    window.location.replace("http://127.0.0.1:1337/preferences");
  } else {
    console.log(false);
    $("#error_question_p").css("color", "red");
    $("#error_question_p").text("All fields are mandatory.");
  }
};

// Se muestran las preferencias
const showPreferences = () => {
  let jsonStr = localStorage.getItem("Preferences");
  let jsonData = JSON.parse(jsonStr);

  // Para input text
  // $("#preferences_p").html(
  //   `Hello <span>${jsonData.username}</span>. <br> Your favourite color for the background is <span>${jsonData.background}</span> and for the letter is <span>${jsonData.letter}</span>.`
  // );
  // Para input color
  $("#preferences_p").html(`<span> Hello${jsonData.username}</span>.`);
  $("body").css("background-color", jsonData.background);
  $("span").css("color", jsonData.letter);
};

// Se borran las preferencias
const deletePreferences = () => {
  localStorage.removeItem("Preferences");
  location.reload();
};

// En caso de que no existan las preferencias se redirige a question
if (
  !localStorage.getItem("Preferences") &&
  $(location).attr("href") == "http://127.0.0.1:1337/preferences"
) {
  window.location.replace("http://127.0.0.1:1337/question");
}

// En caso de que existan las preferencias se redirige a preferences
if (
  localStorage.getItem("Preferences") &&
  $(location).attr("href") == "http://127.0.0.1:1337/question"
) {
  window.location.replace("http://127.0.0.1:1337/preferences");
}

// Se llama a la función showPreferences()
if ($(location).attr("href") == "http://127.0.0.1:1337/preferences") {
  showPreferences();
}
