// //Functionality of nav bar and view my work button
let aboutBtn = document.getElementById("aboutLink");
let projectsBtn = document.getElementById("projectsLink");
let contactBtn = document.getElementById("contactLink");
let openingBtn = document.querySelector(".opening_button"); //had to use querySelector instead of by class as this then returns a HTML collection EVEN if there's only one opening button

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

aboutBtn.addEventListener("click", () => scrollToSection("about_section"));
projectsBtn.addEventListener("click", () => scrollToSection("projects"));
contactBtn.addEventListener("click", () => scrollToSection("contact"));
openingBtn.addEventListener("click", () => scrollToSection("projects"));