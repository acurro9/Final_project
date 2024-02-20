// Se imprime la tabla con los usuarios
const showUsers = () => {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = function (e) {
    bd = e.target.result;
    let objectStore = bd.transaction("User").objectStore("User");

    let getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function (e) {
      let dataStore = e.target.result;
      let userTable = $("#user_tbody");
      dataStore.forEach((user) => {
        let tr = $("<tr>");
        tr.attr("class", "user_tr");
        tr.append(`<td>${user.id}</td>`);
        tr.append(`<td>${user.name}</td>`);
        tr.append(`<td>${user.surname}</td>`);
        tr.append(`<td>${user.email}</td>`);
        tr.append(`<td><ul class="contact_btnAn">
        <li>
          <a class="contact_a">
            <input
              type="button"
              value="Delete"
              onclick="deleteUser(${user.id})"
              class="contact_a_input"
            />

            <span class="border border-top"></span>
            <span class="border border-right"></span>
            <span class="border border-bottom"></span>
            <span class="border border-left"></span>
          </a>
        </li>
      </ul></td>`);
        userTable.append(tr);
      });
    };

    bd.close();
  };
};
// Se imprime la tabla con los mensajes
const showMssg = () => {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = function (e) {
    bd = e.target.result;
    let objectStore = bd.transaction("Message").objectStore("Message");

    let getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = function (e) {
      let dataStore = e.target.result;
      let mssgTable = $("#mssg_tbody");
      dataStore.forEach((mssg) => {
        let tr = $("<tr>");
        tr.attr("class", "msg_tr");
        tr.append(`<td>${mssg.id}</td>`);
        tr.append(`<td>${mssg.name}</td>`);
        tr.append(`<td>${mssg.email}</td>`);
        tr.append(`<td>${mssg.tlf}</td>`);
        tr.append(`<td>${mssg.subject}</td>`);
        tr.append(`<td>${mssg.msg}</td>`);
        tr.append(`<td><ul class="contact_btnAn">
        <li>
          <a class="contact_a">
            <input
              type="button"
              value="Delete"
              onclick="deleteMSG(${mssg.id})"
              class="contact_a_input"
            />

            <span class="border border-top"></span>
            <span class="border border-right"></span>
            <span class="border border-bottom"></span>
            <span class="border border-left"></span>
          </a>
        </li>
      </ul></td>`);
        mssgTable.append(tr);
      });
    };

    bd.close();
  };
};

if (!sessionStorage.getItem("loginAdmin")) {
  window.location.replace("http://127.0.0.1:1337/");
}
//  Se borran un usuario a través de su ID
const deleteUser = (id) => {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = function (e) {
    bd = e.target.result;
    let objectStore = bd.transaction("User", "readwrite");
    let req = objectStore.objectStore("User").delete(id);

    objectStore.oncomplete = () => {
      alert("User deleted");
      $("#user_tbody").empty();
      showUsers();
    };

    objectStore.onerror = (e) => {
      console.log("Error: " + e);
    };
  };
};

//  Se borran un mensaje a través de su ID
const deleteMSG = (id) => {
  let request = indexedDB.open("Portfolio");
  request.onsuccess = function (e) {
    bd = e.target.result;
    let objectStore = bd.transaction("Message", "readwrite");
    let req = objectStore.objectStore("Message").delete(id);

    objectStore.oncomplete = () => {
      alert("Message deleted");
      $("#mssg_tbody").empty();
      showMssg();
    };

    objectStore.onerror = (e) => {
      console.log("Error: " + e);
    };
  };
};

// Cuando carga la página se llama a las funciones showUsers y showMssg
$(document).ready(() => {
  showUsers();
  showMssg();
});
