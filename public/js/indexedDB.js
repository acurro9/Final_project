var bd;
// Se inicia indexedDB y se checkea si ya existen los datos, en caso negativo se añade la tabla de User, Message y Login con sus respectivos datos
function iniciar() {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = function (e) {
    bd = e.target.result;

    let objectStoreMSG = bd.transaction("Message").objectStore("Message");
    let getAllRequestMSG = objectStoreMSG.getAll();

    let objectStoreUser = bd.transaction("User").objectStore("User");
    let getAllRequestUser = objectStoreUser.getAll();

    let objectStoreAdmin = bd.transaction("Login").objectStore("Login");
    let getAllRequestAdmin = objectStoreAdmin.getAll();

    getAllRequestMSG.onsuccess = function (e) {
      let dataStore = e.target.result;
      if (dataStore.length == 0) {
        agregarMessage();
      }
    };

    getAllRequestUser.onsuccess = function (e) {
      let dataStore = e.target.result;
      if (dataStore.length == 0) {
        agregarUsuario();
      }
    };

    getAllRequestAdmin.onsuccess = function (e) {
      let dataStore = e.target.result;
      if (dataStore.length == 0) {
        agregarLogin();
      }
    };
  };

  request.onupgradeneeded = function (e) {
    bd = e.target.result;
    let userResult = bd.createObjectStore("User", {
      keyPath: "id",
      autoIncrement: true,
    });
    let msnResult = bd.createObjectStore("Message", {
      keyPath: "id",
      autoIncrement: true,
    });
    let logResult = bd.createObjectStore("Login", { keyPath: "name" });
  };
}

// Se agregan los datos de la tabla Login
const agregarLogin = () => {
  let loginObjectStore;
  let usuario = {
    name: "admin",
    password: "1234",
  };
  loginObjectStore = bd
    .transaction(["Login"], "readwrite")
    .objectStore("Login");
  loginObjectStore.add(usuario);
};

// Se agregan los datos de la tabla User
const agregarUsuario = () => {
  let customerObjecstore;
  let usuario;
  let nombres = ["Aaron", "Sergio", "Laura", "Luis"];
  let apellidos = [
    "Curro Solla",
    "Perez Fernandez",
    "Picapiedra Gonzalez",
    "Martinez Reiriz",
  ];
  let emails = [
    "acurrosolla@gmail.com",
    "sergioPF@gmail.com",
    "lau9@gmail.com",
    "luis2003@gmail.com",
  ];
  let contraseña = "1234";

  for (let i = 0; i < nombres.length; i++) {
    usuario = {
      name: nombres[i],
      surname: apellidos[i],
      email: emails[i],
      password: contraseña,
    };

    customerObjecstore = bd
      .transaction(["User"], "readwrite")
      .objectStore("User");
    customerObjecstore.add(usuario);
  }

  customerObjecstore.oncomplete = function () {
    console.log("Usuarios cargados con exito");
  };
};

// Se agregan los datos de la tabla Message
const agregarMessage = () => {
  let messageTx;
  let message;
  let nombres = ["Pedro", "Carlos", "Eliezer", "Constantino", "Manolo"];
  let emails = [
    "pedroEjercito@gmail.com",
    "carlospt@gmail.com",
    "elAS@gmail.com",
    "const@gmail.com",
    "manoloGarcia@gmail.com",
  ];
  let tlf = [678987412, 689821259, 632235664, 638487520, 601458782];
  let subjects = [
    "Crear página web",
    "¿Como cambiar el color de un botón?",
    "¿Como centrar un div?",
    "Presupuesto",
    "Crear tienda online",
  ];
  let texts = [
    "Suspendisse convallis nulla sed felis tincidunt consequat. Aliquam viverra aliquam metus id facilisis. Sed hendrerit nulla vitae massa porttitor pharetra. Morbi et ante ac erat gravida fermentum. Integer iaculis pellentesque.",
    "Suspendisse convallis nulla sed felis tincidunt consequat. Aliquam viverra aliquam metus id facilisis. Sed hendrerit nulla vitae massa porttitor pharetra. Morbi et ante ac erat gravida fermentum. Integer iaculis pellentesque.",
    "Suspendisse convallis nulla sed felis tincidunt consequat. Aliquam viverra aliquam metus id facilisis. Sed hendrerit nulla vitae massa porttitor pharetra. Morbi et ante ac erat gravida fermentum. Integer iaculis pellentesque.",
    "Suspendisse convallis nulla sed felis tincidunt consequat. Aliquam viverra aliquam metus id facilisis. Sed hendrerit nulla vitae massa porttitor pharetra. Morbi et ante ac erat gravida fermentum. Integer iaculis pellentesque.",
    "Suspendisse convallis nulla sed felis tincidunt consequat. Aliquam viverra aliquam metus id facilisis. Sed hendrerit nulla vitae massa porttitor pharetra. Morbi et ante ac erat gravida fermentum. Integer iaculis pellentesque.",
  ];

  for (let i = 0; i < nombres.length; i++) {
    let id = i + 1 + "";
    message = {
      name: nombres[i],
      email: emails[i],
      tlf: tlf[i],
      subject: subjects[i],
      msg: texts[i],
      // Agregar datos a la tabla "Message"
    };
    messageTx = bd.transaction("Message", "readwrite").objectStore("Message");
    messageTx.add(message);
  }
  messageTx.oncomplete = function () {
    console.log("Mensajes agregados con éxito.");
  };
};

// Cuando carga la página se llama a la función iniciar
window.addEventListener("load", iniciar);
