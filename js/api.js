//Obtiene de jsonplaceholder una lista de usuarios y 
// los usa para generar la lista de alumnos recibidos
// en el último curso.

const API_URL = "https://jsonplaceholder.typicode.com";

const respuestaHtml = document.querySelector("#listado_alumnos");
const ul = document.createElement('ul');

//uso la api fetch
fetch(`${API_URL}/users`)   //promesa
    .then((response) => response.json()) //otra promesa
    .then((users) => {
        users.forEach(user => {
            //crea una li con el user
            let elemento = document.createElement('li');
            elemento.appendChild(
                // creo la linea de texto con los datos del user
                document.createTextNode(`${user.name} ✉️ ${user.email}`)
            );
            //agrega esa li a la ul
            ul.appendChild(elemento);
        });

        //agrega la ul al listado_alumnos
        respuestaHtml.appendChild(ul);
    });


