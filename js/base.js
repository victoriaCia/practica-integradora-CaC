let header=`
    <div class="header__title">
        <h1>La Cocina de Juan</h1>
    </div>
    <nav class="navbar navbar__container" id="navbar">
        <div class="nav__title">
            <a href="index.html"><p>La Cocina de Juan</p></a>
        </div>
        <input type="checkbox" id="toggler">
        <label for="toggler"><i class="ri-menu-line"></i></label>
        <div class="menu">
        <ul class="list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Acerca de</a></li>
            <li><a href="contact.html">Contacto</a></li>
            <li><a href="signup.html">Registrarse</a></li>
            <li><a href="sucursales.html">Sucursales</a></li>
            <li><a href="clientes.html">Nuestros Clientes</a></li>
            <li><a href="productos.html">Nuestros Productos</a></li>
        </ul>
        </div>
    </nav>
    `

let footer=`
        <p>Victoria Cia</p>
        <div class="footer__icons">
            <p>Repositorio </p>
            <a href="https://github.com/victoriaCia/primera_pagina_curso_codoacodo.git" target="_blank"><img src="media/assets/Github.svg"></a>
        </div>
        <p>Derechos reservados @2022</p>       
    `



document.getElementById('header').innerHTML=header;

document.getElementById('footer').innerHTML=footer;



 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};

 // Get the navbar
 let navbar = document.getElementById("navbar");

 // Get the offset position of the navbar
 let sticky = navbar.offsetTop;

 // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function myFunction() {
     console.log('llama funcion')
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky");
     } else {
         navbar.classList.remove("sticky");
     }}

