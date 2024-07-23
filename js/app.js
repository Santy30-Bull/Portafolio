// Función para inicializar eventos
function initializeButtons() {
    var skillsButton = document.getElementById('skills-button');
    var educationButton = document.getElementById('education-button');
    var indexButton = document.getElementById('index-button');
    if (skillsButton) {
        skillsButton.onclick = function () {
            window.location.href = 'skills.html';
        };
        skillsButton.onmouseover = function () {
            skillsButton.style.transform = "scale(1.1)";
            skillsButton.style.backgroundColor = "#555";
        };
        skillsButton.onmouseout = function () {
            skillsButton.style.transform = "scale(1)";
            skillsButton.style.backgroundColor = "#fff";
        };
        educationButton.onmousedown = function () {
            educationButton.style.transform = "scale(0.9)";
        };
    }
    if (educationButton) {
        educationButton.onclick = function () {
            window.location.href = 'education.html';
        };
        educationButton.onmouseover = function () {
            educationButton.style.transform = "scale(1.1)";
            educationButton.style.backgroundColor = "#555";
        };
        educationButton.onmouseout = function () {
            educationButton.style.transform = "scale(1)";
            educationButton.style.backgroundColor = "#fff";
        };
        educationButton.onmousedown = function () {
            educationButton.style.transform = "scale(0.9)";
        };
    }
    if (indexButton) {
        indexButton.onclick = function () {
            window.location.href = 'index.html';
        };
        indexButton.onmouseover = function () {
            indexButton.style.transform = "scale(1.1)";
            indexButton.style.backgroundColor = "#555";
        };
        indexButton.onmouseout = function () {
            indexButton.style.transform = "scale(1)";
            indexButton.style.backgroundColor = "#fff";
        };
        indexButton.onmousedown = function () {
            indexButton.style.transform = "scale(0.9)";
        };
    }
}
// Inicializar eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeButtons);
