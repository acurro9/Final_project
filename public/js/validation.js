//Se valida el formulario
//Expresiones regulares
const regMail = /^\w+@[a-zA-Z]+\.(com|es|org)$/;
const regNumber = /\d{3}\s?\d{3}\s?\d{3}/;
const regName = /^[a-zA-Z-' ]+$/;

let resultName;
let resultMail;
let resultNumber;

var error;
var errorConfirmation = [false, false, false, false, false];
var errorCont = 0;
var validationResult = false;

$("#contact_name").bind("keyup", () => {
  validationInput("name");
});
$("#contact_mail").bind("keyup", () => {
  validationInput("mail");
});
$("#contact_tlf").bind("keyup", () => {
  validationInput("tlf");
});
$("#contact_subject").bind("keyup", () => {
  validationInput("subject");
});
$("#contact_msg").bind("keyup", () => {
  validationInput("msg");
});

const validationInput = async (type) => {
  switch (type) {
    case "name":
      error = await validateName();
      break;
    case "mail":
      error = await validateMail();
      break;
    case "tlf":
      error = await validateTLF();
      break;
    case "subject":
      error = await validateSubject();
      break;
    case "msg":
      error = await validateMSG();
      break;
  }
  errorCont = 0;
  //En caso de no haber errores
  errorConfirmation.forEach((confirmation) => {
    if (confirmation) {
      errorCont++;
    }
  });
  if (errorCont == 5) {
    validationResult = true;
  } else {
    $("#contact_error").text(error);
  }
};

const validateName = async () => {
  let errorMSG = "";
  //En caso de estar vacio se añade el error al vector de errores
  if ($("#contact_name").val() == "") {
    errorMSG = "You have to include a name!";

    $("#contact_name").addClass("error");
    $("#contact_name").removeClass("validate");
    errorConfirmation[0] = false;
  } else {
    resultName = await validate(regName, $("#contact_name").val());
    //Si el valor del input no se encuentra en las opciones de la expresión regular
    if (!resultName) {
      errorMSG = "The name is not valid!";

      $("#contact_name").addClass("error");
      $("#contact_name").removeClass("validate");
      errorConfirmation[0] = false;
    } else {
      $("#contact_name").addClass("validate");
      $("#contact_name").removeClass("error");
      errorConfirmation[0] = true;
      clearErrors();
    }
  }
  return errorMSG;
};
const validateMail = async () => {
  let errorMSG = "";
  //En caso de estar vacio se añade el error al vector de errores
  if ($("#contact_mail").val() == "") {
    errorMSG = "You have to include an email!";

    $("#contact_mail").addClass("error");
    $("#contact_mail").removeClass("validate");
    errorConfirmation[1] = false;
  } else {
    resultMail = await validate(regMail, $("#contact_mail").val());
    //Si el valor del input no se encuentra en las opciones de la expresión regular
    if (!resultMail) {
      errorMSG = "The email is not valid!";

      $("#contact_mail").addClass("error");
      $("#contact_mail").removeClass("validate");
      errorConfirmation[1] = false;
    } else {
      $("#contact_mail").addClass("validate");
      $("#contact_mail").removeClass("error");
      errorConfirmation[1] = true;
      clearErrors();
    }
  }

  return errorMSG;
};
const validateTLF = async () => {
  let errorMSG = "";
  //En caso de estar vacio se añade el error al vector de errores
  if ($("#contact_tlf").val() == "") {
    errorMSG = "You have to include a phone number!";

    $("#contact_tlf").addClass("error");
    $("#contact_tlf").removeClass("validate");
    errorConfirmation[2] = false;
  } else {
    resultNumber = await validate(regNumber, $("#contact_tlf").val());
    //Si el valor del input no se encuentra en las opciones de la expresión regular
    if (!resultNumber) {
      errorMSG = "The phone number is not valid!";

      $("#contact_tlf").addClass("error");
      $("#contact_tlf").removeClass("validate");
      errorConfirmation[2] = false;
    } else {
      $("#contact_tlf").addClass("validate");
      $("#contact_tlf").removeClass("error");
      errorConfirmation[2] = true;
      clearErrors();
    }
  }

  return errorMSG;
};
const validateSubject = () => {
  let errorMSG = "";
  //En caso de estar vacio se añade el error al vector de errores
  if ($("#contact_subject").val() == "") {
    errorMSG = "You have to include a subject!";

    $("#contact_subject").addClass("error");
    $("#contact_subject").removeClass("validate");
    errorConfirmation[3] = false;
  } else {
    $("#contact_subject").addClass("validate");
    $("#contact_subject").removeClass("error");
    errorConfirmation[3] = true;
    clearErrors();
  }

  return errorMSG;
};
const validateMSG = () => {
  let errorMSG = "";
  //En caso de estar vacio se añade el error al vector de errores
  if ($("#contact_msg").val() == "") {
    errorMSG = "You have to include a message!";

    $("#contact_msg").addClass("error");
    $("#contact_msg").removeClass("validate");
    errorConfirmation[4] = false;
  } else {
    $("#contact_msg").addClass("validate");
    $("#contact_msg").removeClass("error");
    errorConfirmation[4] = true;
    clearErrors();
  }

  return errorMSG;
};

const sendMSG = async () => {
  if (validationResult) {
    //Se crea un array asociativo con los datos del formulario
    let contactMSG = {
      name: $("#contact_name").val(),
      email: $("#contact_mail").val(),
      tlf: $("#contact_tlf").val(),
      subject: $("#contact_subject").val(),
      msg: $("#contact_msg").val(),
    };

    if (await addMessage(contactMSG)) {
      sendConfirmation();
    }
  } else {
    $("#contact_error").text("Please, fill in all fields correctly");
  }
  validationResult = false;
};

const clearErrors = () => {
  $("#contact_error").text("");
};
const sendConfirmation = () => {
  alert("Message send successfully!");
  window.location = "/contact";
};

const validate = (reg, val) => {
  return new Promise((resolve) => {
    if (reg.test(val)) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const addMessage = async (msg) => {
  return new Promise((resolve) => {
    let request = indexedDB.open("Portfolio");
    request.onsuccess = async (e) => {
      bd = e.target.result;
      if (await addMSG(msg)) {
        resolve(true);
      } else {
        resolve(false);
      }
    };
  });
};

const addMSG = async (msg) => {
  return new Promise((resolve) => {
    let messageTx;
    messageTx = bd.transaction("Message", "readwrite").objectStore("Message");
    let result = messageTx.add(msg);
    if (result) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
