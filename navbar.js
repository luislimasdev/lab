document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="logo-wrapper">
            <div class="logo-text">LUÍS LIMA
                <span>LAB ONLINE</span>
            </div>
            <div class ="divider"></div>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Solicitar Design / Planejamento</a></li>
            <li><a href="#">Acompanhar Pedido</a></li>
            <li><a href="contatosuporte.html">Contato & Suporte</a></li>
            <li><a href="#">Sobre Nós</a></li>
        </ul>
    </nav>
    `;

    // Injeta a nav bar no elemento que tiver a classe 'meu-menu''
document.querySelector(".meu-menu").innerHTML = navbarHTML
});