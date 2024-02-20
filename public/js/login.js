var bd;
// Al hacer click en el botón se checkea que se haya indicado username y password
$("#login").bind("click", () => {
  let name = $("#name").val();
  let password = $("#password").val();
  let errors = [];
  $("#login_error_p").html("");

  if (name == "") {
    errors.push("Username is required");
  }
  if (password == "") {
    errors.push("Password is required");
  }

  if (errors.length === 0) {
    checkData(name, password);
  } else {
    $("#login_form").height("500px");
    errors.forEach((error) => {
      $("#login_error_p").html($("#login_error_p").html() + "<br>" + error);
    });
  }
});

// Se comparan los datos introducidos con los usuarios
const checkData = (name, password) => {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = (e) => {
    bd = e.target.result;
    let objectStore = bd.transaction("Login").objectStore("Login");

    let getAllRequest = objectStore.get("admin");

    getAllRequest.onsuccess = (e) => {
      let dataStore = e.target.result;
      let userName = dataStore.name;
      let userPass = dataStore.password;

      if (name == userName && password == userPass) {
        sessionStorage.setItem("loginAdmin", true);
        window.location.replace("http://127.0.0.1:1337/admin");
      } else {
        let userStore = bd.transaction("User").objectStore("User");

        let getRequest = userStore.getAll();
        getRequest.onsuccess = (e) => {
          let users = e.target.result;
          users.forEach((user) => {
            userName = user.name;
            userPass = user.password;
            if (name == userName && password == userPass) {
              document.cookie = "name=" + user.name + ";expires=365;path=/";
              document.cookie =
                "surname=" + user.surname + ";expires=365;path=/";
              document.cookie = "email=" + user.email + ";expires=365;path=/";
              document.cookie =
                "fullName=" +
                user.name +
                " " +
                user.surname +
                ";expires=365;path=/";
              sessionStorage.setItem("login", true);
              window.location.href = "http://127.0.0.1:1337/preferences";
            } else {
              $("#login_form").height("450px");
              $("#login_error_p").text("Incorrect username or password");
            }
          });
        };
      }
    };
  };
};

// Se borran las cookies
const deleteCookies = () => {
  const date = new Date();
  date.setTime(date.getTime() - 1000);

  document.cookie = `email= ;expires=${date.toUTCString()};path=/`;
  document.cookie = `surname= ;expires=${date.toUTCString()};path=/`;
  document.cookie = `fullName= ;expires=${date.toUTCString()};path=/`;
  document.cookie = `name= ;expires=${date.toUTCString()};path=/`;
};

// Al darle clicken Yes para cerrar sesión
$("#logout_yes_btn").bind("click", () => {
  sessionStorage.removeItem("login");
  sessionStorage.removeItem("loginAdmin");
  localStorage.removeItem("Preferences");

  deleteCookies();

  window.location.replace("http://127.0.0.1:1337/");
});

// Al darle clicken No para cerrar sesión
$("#logout_no_btn").bind("click", () => {
  window.location.replace("http://127.0.0.1:1337/admin");
});
