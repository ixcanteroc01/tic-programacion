var datos = document.getElementById("datos");

var a = parseFloat(prompt("Ingrese el coeficiente a: \n"));
var b = parseFloat(prompt("Ingrese el coeficiente b: \n"));
var c = parseFloat(prompt("Ingrese el término independiente c: \n"));

if(esNumero(a) && esNumero(b) && esNumero(c)){

    if ((((b**2)-4*a*c) < 0)){
        datos.innerHTML += "<br/>La solución de la ecuación contiene números complejos"
    }else{
        var solucion_1 = (-b+Math.sqrt(b**2-(4*a*c)))/(2*a);
        var solucion_2 = (-b-Math.sqrt(b**2-(4*a*c)))/(2*a);
    
        datos.innerHTML += "Las soluciones de la ecuación son:<br>";
        datos.innerHTML += "Solución 1: <strong>" + solucion_1 + "</strong><br>";
        datos.innerHTML += "Solución 2: <strong>" + solucion_2 + "</strong>";
    }
    
}else{
    datos.innerHTML += "<span style='color: red;'>Error, los números introducidos no son válidos</span>";
}

function esNumero(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}