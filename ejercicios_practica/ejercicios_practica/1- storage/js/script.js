"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/
let btnIngresar = document.getElementById("btnIngresar");
let inputUsuario = document.getElementById("usuario");
let inputEmail = document.getElementById("email");
let pUsuarioLogeado = document.getElementById("usuarioLogeado");
let pEmailLogeado = document.getElementById("emailLogeado");


btnIngresar.onclick = function() {
  
  let usuario = inputUsuario.value;
  let email = inputEmail.value;
  
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("email", email);
  
  pUsuarioLogeado.innerHTML = usuario;
  pEmailLogeado.innerHTML = email;
};
/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/
window.addEventListener("DOMContentLoaded", function() {
  
  let usuarioAlmacenado = sessionStorage.getItem("usuario");
  let emailAlmacenado = sessionStorage.getItem("email");

  if (usuarioAlmacenado && emailAlmacenado) {
    
    let usuarioLogeadoElement = document.getElementById("usuarioLogeado");
    let emailLogeadoElement = document.getElementById("emailLogeado");

    usuarioLogeadoElement.textContent = usuarioAlmacenado;
    emailLogeadoElement.textContent = emailAlmacenado;

    
    let loginSection = document.getElementById("login");
    loginSection.classList.add("hidden");

    
    let logoutSection = document.getElementById("logout");
    logoutSection.classList.remove("hidden");
  }
});

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
window.addEventListener("DOMContentLoaded", function() {
  
  let usuarioAlmacenado = sessionStorage.getItem("usuario");
  let emailAlmacenado = sessionStorage.getItem("email");

  if (usuarioAlmacenado && emailAlmacenado) {
    
    let usuarioLogeadoElement = document.getElementById("usuarioLogeado");
    let emailLogeadoElement = document.getElementById("emailLogeado");

    usuarioLogeadoElement.textContent = usuarioAlmacenado;
    emailLogeadoElement.textContent = emailAlmacenado;

    
    let loginSection = document.getElementById("login");
    loginSection.classList.add("hidden");

    
    let logoutSection = document.getElementById("logout");
    logoutSection.classList.remove("hidden");
  }

  
  let salirButton = document.getElementById("salir");
  salirButton.addEventListener("click", function() {
 
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("email");

    
    window.location.reload();
  });
});



