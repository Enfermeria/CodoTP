//Para mostrar u ocultar el menu hamburguer
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".contenedor_menu").classList.toggle("menu_mostrado"); 
}
