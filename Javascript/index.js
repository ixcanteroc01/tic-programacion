function comprobar(){
   var user = document.form.user.value;
   var contraseña = document.form.contraseña.value;
   if(user == "usuario" && contraseña == "1234"){
        window.open('inicio.html');
   } else {
        alert("Usuario o contraseña incorrectos.\nInténtelo de nuevo.");
   }
}
