// //Functionality of nav bar and view my work button
let techStackBtn = document.getElementById("techstack");
let aboutBtn = document.getElementById("aboutLink");
let projectsBtn = document.getElementById("projectsLink");
let contactBtn = document.getElementById("contactLink");
let openingBtn = document.querySelector(".opening_button");

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

techStackBtn.addEventListener("click", () => scrollToSection("tech_stack"));
aboutBtn.addEventListener("click", () => scrollToSection("about_section"));
projectsBtn.addEventListener("click", () => scrollToSection("projects"));
contactBtn.addEventListener("click", () => scrollToSection("contact"));
openingBtn.addEventListener("click", () => scrollToSection("projects"));


let openingSection = document.getElementById("opening_page");

openingSection.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    let sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    let offsetX = (Math.random() - 0.5) * 100;
    let offsetY = (Math.random() - 0.5) * 100;

    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;

    sparkle.style.setProperty('--random-x', offsetX);
    sparkle.style.setProperty('--random-y', offsetY);

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}