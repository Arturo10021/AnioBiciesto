import esBisiesto from "./esBisiesto.js";

const year = document.querySelector("#year");
const form = document.querySelector("#es-bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(esBisiesto(year.value)== true){
    div.innerHTML = "El año es bisiesto";
  }
  else{
    div.innerHTML = "El año no es bisiesto";
  }
});
