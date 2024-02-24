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
  "HTML, CSS, PHP y JS",
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
const Fcolumns = new Project(
  "Four Columns",
  "HTML y CSS",
  "4tarjetas.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/Four-Columns-main/index.html"
);
const curvedSection = new Project(
  "Curved Section",
  "HTML y CSS",
  "curvedSection.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/curved-sections-main/index.html"
);
const socialProof = new Project(
  "Social Proof",
  "HTML y CSS",
  "social_proof.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/social-proof-section-master-main/index.html"
);
const profileCard = new Project(
  "Profile Card",
  "HTML y CSS",
  "profile.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/profile-card-component-main/index.html"
);
const TColumns = new Project(
  "Three Columns",
  "HTML y CSS",
  "3columns.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/3-columns-preview-card-component-main/index.html"
);
const orderSumary = new Project(
  "Order Sumary",
  "HTML y CSS",
  "order.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/order-summary-component-main/index.html"
);
const previewCard = new Project(
  "Product Preview",
  "HTML y CSS",
  "product.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/product-preview-card-component-main/index.html"
);
const NFT = new Project(
  "NFT",
  "HTML y CSS",
  "nft.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/NFT-card-preview-main/index.html"
);
const simplePrice = new Project(
  "Price Grid",
  "HTML y CSS",
  "simplegrid.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/simple-price-grid-main/index.html"
);
const statsPreview = new Project(
  "Stats Preview",
  "HTML y CSS",
  "business.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/stats-preview-card-component-main-main/index.html"
);
const freelancer = new Project(
  "Freelancer",
  "HTML y CSS",
  "freelancer.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/firstpage-main/index.html"
);
const html_editor = new Project(
  "HTML Editor",
  "HTML, CSS y JS",
  "html_editor.png",
  "https://acurro9.github.io/FrontEnd_Mentor_Projects/Proyectos/HTML_Editor-master/index.html"
);
//Se guardan los proyectos en un array multidimensional
const projects = [
  [drogo, NFT, TColumns, Fcolumns, profileCard],
  [
    bienesRaices,
    freelancer,
    statsPreview,
    socialProof,
    orderSumary,
    curvedSection,
  ],
  [simplePrice, tresRaya, previewCard, html_editor],
];
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
