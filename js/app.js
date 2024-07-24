// Función para inicializar eventos
function initializeButtons() {
    /*Botones Principales*/
    var skillsButton = document.getElementById('skills-button');
    var educationButton = document.getElementById('education-button');
    var indexButton = document.getElementById('index-button');
    
    /*Funcionalidades extra */
    var FotoPerfil = document.getElementById('FotoPerfil');
    var Email = document.getElementById('email');
    

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
    }
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
    }
    if (indexButton) {
        indexButton.onclick = function () {
            console.log('Botón indexButton clickeado');
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
    }
    if (FotoPerfil) {
        FotoPerfil.onmouseover = function () {
            FotoPerfil.style.transform = "scale(1.1)";
        };
        FotoPerfil.onmouseout = function () {
            FotoPerfil.style.transform = "scale(1)";
        };
        FotoPerfil.onclick = function () {
            window.open("https://github.com/Santy30-Bull", "_blank");
        };
    }
    if (Email){
        Email.onclick = function () {
            window.open("https://www.linkedin.com/in/santiago-augusto-toro-bonilla-727093286/", "_blank");
        };
    }
}
// Inicializar eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeButtons);
