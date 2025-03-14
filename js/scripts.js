//selecionar os elemntos dos slides
const slides = document.querySelectorAll(".banner");
//
const dots = document.querySelectorAll(".dot");
// variavel de controle
let slideIndex = 0;

function  showSlides() {
    for(let i=0; i< slides.length; i++){
      slides[i].classList.remove("active")
      dots[i].classList.remove("active")
    }

    slideIndex++; //avançando a variavel
    if (slideIndex > slides.length){
      slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)
}

//Inicialização
showSlides()






















//DOM
//Navegar no documento html
//const brand = document.querySelector("#brand");
//console.log(brand) 
//brand.addEventListener('click', function(event){
    //console.log('Testando o click!'); 
    //console.log(event.target)
    //event.target.style.color = "blue";
  
  