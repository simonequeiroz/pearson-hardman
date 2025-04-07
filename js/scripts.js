// selecionando elementos do menu Mobile
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Fechar o menu, apos clicar na opçao sobre
//Feito por Walisson e Sena
const about = document.querySelector('#mobile-navbar [href="#about"]');

//selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner");
//
const dots = document.querySelectorAll(".dot");
// variavel de controle
let slideIndex = 1;

function showSlides() {
  //console.log(slides)
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++; //avançando a variavel
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  console.log(slideIndex);
  console.log(slides[slideIndex - 1]);
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}
// Adicione no HTML: <button class="prev">❮</button> <button class="next">❯</button>
document.querySelector(".prev")?.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlides();
});

document.querySelector(".next")?.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlides();
});

function updateSlides() {
  // Mesma lógica de ativação do showSlides()
}
const slider = document.querySelector(".slides-container");
slider?.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
slider?.addEventListener("mouseleave", () => {
  slideTimeout = setTimeout(showSlides, 3000);
});
//Ativar menu-Mobile
// arrow function
// () => {
// }
// function default
// function () {
// }
//menuBtn.addEventListener("click", (e) => {
//menu.classList.add("menu-active")
//})
//closeMenuBtn.addEventListener("click", (e) => {
// menu.classList.add("menu-active")
//})
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

//Inicialização do slides
showSlides();

// Carregar o footer.html dinamicamente no index.html
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerContainer = document.getElementById("footer-container");
      if (footerContainer) {
        footerContainer.innerHTML = data;
      }
    });
});

//DOM
//Navegar no documento html
//const brand = document.querySelector("#brand");
//console.log(brand)
//brand.addEventListener('click', function(event){
//console.log('Testando o click!');
//console.log(event.target)
//event.target.style.color = "blue";
