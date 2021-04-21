var numeroAdivinar = Math.floor((Math.random()*100)+1);
var intentos = 0;

function adivinar(){
    var datos = document.getElementById("datos");
    var numeroUser = Number(document.getElementById("numero_user").value);
    
    if(esNumero(numeroUser) && numeroUser > 0 && numeroUser <100){
    
        if(numeroUser > numeroAdivinar){
                datos.innerHTML += "<br> - El número que buscas es inferior que " + numeroUser;
        }else if(numeroUser < numeroAdivinar){
                datos.innerHTML += "<br> - El número que buscas es superior que " + numeroUser;
        }else{
                datos.innerHTML += "<br><br><span style='color: green;'> - CORRECTO! El número era " + numeroAdivinar + ". <br> Número de intentos: " + intentos + "</span>";
                fin();
        }
    intentos += 1;
        }else{
        datos.innerHTML += "<br><span style='color: red;'> - ERROR. Tienes que poner un valor numérico entre 1 y 100</span>";
    }
    document.getElementById("numero_user").value = "";
        return false;
}
document.getElementById("datos").innerHTML=datos.textContent;

function fin(){
    document.getElementById("numero_user").disabled=true;
    document.getElementById("boton").disabled=true;
}

function esNumero(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}