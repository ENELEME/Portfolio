


//  Navigation //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Copy du mail //

const btnCopy = document.querySelector('.btn-copy');
const txtCopy = document.querySelector('.btn p');
const copyMail = document.getElementById("copy-mail");


btnCopy.addEventListener('click', fonction1);
btnCopy.addEventListener('mouseout', fonction2);

function fonction1 (){
    navigator.clipboard.writeText(txtCopy.textContent),
    copyMail.innerHTML = "Copied to clipboard !";
    copyMail.style.color = "black";  
};

function fonction2 (){
    copyMail.innerHTML = "manukyanmeline4@gmail.com"
    copyMail.style.color = "white";    
}








