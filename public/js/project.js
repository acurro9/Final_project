//Item Class
class Item {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  /*Getterrs */
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
}
//Project Class
class Project extends Item {
  #image;
  #href;
  constructor(title, descripcion, image, href) {
    super(title, descripcion);
    this.#image = image;
    this.#href = href;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getImage() {
    return this.#image;
  }
  getHref() {
    return this.#href;
  }
}
//Se crean los proyectos
const drogo = new Project(
  "Drogo",
  "HTML, CSS, JS, PHP y MVC con Active Record",
  "drogo.png",
  "https://github.com/acurro9/DrogoMVC"
);
const bienesRaices = new Project(
  "Bienes Raices",
  "HTML, CSS, PHP, SASS y JS",
  "bienesRaices.png",
  "https://github.com/acurro9/bienesRaices"
);
const tresRaya = new Project(
  "Tic Tac Toe",
  "Java",
  "tresRaya.png",
  "https://github.com/acurro9/TresEnRaya"
);
const frontEnd = new Project(
  "FrontEnd Mentor Projects",
  "HTML, CSS y JS",
  "FrontEndMentor.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/index.html"
);
// Se guardan los proyectos en un array multidimensional

const projects = [[frontEnd], [drogo, bienesRaices], [tresRaya]];
//Se insertan los proyectos en el html
function createProjects(arrayP) {
  try {
    //Se recoge el elemento con id projects_project
    var projectsMain = document.getElementById("projects_project");
    for (let y = 0; y < 3; y++) {
      //Se crea el div de la fila y se le añade la clase
      var outerDiv = document.createElement("div");
      outerDiv.classList.add("projects_flex");
      for (let x = 0; x < projects[y].length; x++) {
        //Se crea el elemento a correspondiente al proyecto y se le asigna una clase, el href de su instancia y target blank
        var innerDiv = document.createElement("a");
        innerDiv.classList.add("projects_photo");
        let projectHREF = arrayP[y][x].getHref();
        innerDiv.setAttribute("href", `${projectHREF}`);
        innerDiv.setAttribute("target", "_blank");
        //Se crea el elemento h1, se le asigna el titulo de la instancia
        var heading = document.createElement("h1");
        heading.textContent = String(arrayP[y][x].getTitle());
        //Se crea el elemento p, se le asigna la descripcion de la instancia
        var paragraph = document.createElement("p");
        paragraph.textContent = String(arrayP[y][x].getDescription());
        //Se crea el elemento img, se le asigna la url con el elemento image de la instancia y el id correspondiente
        var image = document.createElement("img");
        let imgSRC = "./images/projects/" + arrayP[y][x].getImage();
        image.src = imgSRC;
        image.alt = arrayP[y][x].getTitle();
        image.id = "projects_img";
        //Se añaden el h1, p e image al elemento a y el elemento a al div
        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);
        innerDiv.appendChild(image);
        outerDiv.appendChild(innerDiv);
      }
      //Se asigna el div al elemento con id projects_project
      projectsMain.appendChild(outerDiv);
    }
  } catch (err) {
    //Se imprime el error en caso de haberlo
    console.log("Error: " + err);
  }
}
//Al cargar la página se añaden los proyectos
window.addEventListener("load", (e) => {
  try {
    createProjects(projects);
  } catch (err) {
    console.log("Error: " + err);
  }
});
