//validación del formulario de inscripción
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if ( !expRegNombre.test(nombre.value)) {
        return alert("Nombre no válido");
    }

    if (!expRegEmail.test(email.value)) {
        return alert("Formato email no válido");
    }

    console.log("Formulario enviado con éxito");
    
});



/*
//validación del formulario de inscripción
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    const expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    
    //valido el nombre
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        return alert('No has escrito nada en el usuario');
    }
    if ( !expRegNombre.test(nombre)) {
        return alert("Nombre no válido");
    }

    //valido el email
    const expRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    let email = document.getElementById('enail').value;
    if (email.length == 0) {
        return alert('No has escrito nada en el e-mail');
    }
    if (!expRegEmail.test(email)) {
        return alert("Formato email no válido");
    }

    //todo bien, envio el formulario
    alert("Formulario enviado con éxito");
    this.submit();
}
*/

// window.onscroll = function () {
//     var posicion = window.pageYOffset || document.documentElement.scrollTop;
//     var elemento1 = document.getElementById("icon_heart");
//     var elemento2 = document.getElementById("icon_fire");
//     elemento1.style.bottom = posicion * 0.1 + "px";
//     elemento2.style.top = posicion * 0.1 + "px";
// }



/* VALIDACION DE MAIL
let reCorto = /\S+@\S+\.\S+/
// Medio
var reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
// Largo
var reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
reCorto.test(‘prueba@correo.com’) // true
reMedio.test(‘prueba@correo.com’) // true
reLargo.test(‘prueba@correo.com’) // true
reCorto.test(‘prueba.com’) // false
reMedio.test(‘prueba.com’) // false
reLargo.test(‘prueba.com’) // false
reCorto.test(‘prueba@correo.c’) // true
reMedio.test(‘prueba@correo.c’) // false
reLargo.test(‘prueba@correo.c’) // false
reCorto.test(‘prueba@cor*reo.com’) // true
reMedio.test(‘prueba@cor*reo.com’) // true
reLargo.test(‘prueba@cor*reo.com’) // false




RegEx minimalista
^[^@]+@[^@]+\.[a-zA-Z]{2,}$

Ejemplo:
alguien@algunlugar.es

RegEx email según w3.org
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$

Ejemplo:
foo-bar.baz@example.com

http://dev.w3.orgstar

Una implementación del Estandard Official: RFC 5322:
( valida en el 99.99% de los emails existentes )
^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$

Ejemplo:
alguien@algunlugar.es

pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"

*/
