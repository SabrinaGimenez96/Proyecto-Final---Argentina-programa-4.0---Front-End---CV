
let btnExp = document.getElementById("btnExp");
var infoExp = document.getElementById("infoExp");
btnExp.addEventListener("click", mostrarExperiencia)

function mostrarExperiencia(){
  if(infoExp.style.display == "none"){
    infoExp.style.display = "block";
  }else {
    infoExp.style.display = "none";
  }
     
}

let btnEdu = document.getElementById("btnEdu");
var infoEdu = document.getElementById("infoEdu");
btnEdu.addEventListener("click", mostrarEducacion);

function mostrarEducacion(){
  if(infoEdu.style.display == "none"){
    infoEdu.style.display = "block";
  }else {
    infoEdu.style.display = "none";
  }
     
}