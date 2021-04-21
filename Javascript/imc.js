var datos = document.getElementById("datos");

var altura = (parseFloat(prompt("Introduce tu altura en cm"))/100);
var peso = parseFloat(prompt("Introduce tu masa en kg"));
      
imc = peso / (altura*altura);
imc = parseFloat(imc.toFixed(2));

datos.innerHTML += "<br>";

if(isNaN(imc)){
    datos.innerHTML += "Error, las medidas introducidas no son válidas";
} else if (altura<0 || peso<0){
    datos.innerHTML +="Error, las medidas introducidas no pueden ser negativas";
} else {
    datos.innerHTML += "<br/>Para un peso de "+peso+" kilogramos y una talla de "+altura+" metros,"
    datos.innerHTML += "<br/> Su índice de masa corporal es: " + imc;
    datos.innerHTML += "<br/> Resultado: ";

    if (imc > 0 && imc <= 18.5){ 
        datos.innerHTML +="Peso inferior al normal";}
    else if (imc >= 18.5 && imc <= 24.9){ 
        datos.innerHTML +="Peso normal";}
    else if (imc >= 25 && imc <= 29.9){ 
        datos.innerHTML +="Peso superior al normal";} 
    else{
        datos.innerHTML +="Obesidad";} 
} 