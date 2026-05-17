// Função que gera o rodapé automaticamente
function gerarFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-socials">
                <a href="https://instagram.com/seu_perfil" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://wa.me/55..." target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                <a href="#" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
            
            <div class="footer-copyright">
                <p>&copy; 2026 Lima Dental Design & Planning. Todos os direitos reservados.</p>
                <p style="margin-top: 5px; color: #444; font-size: 0.75rem;">Responsabilidade Técnica: Luís Lima CRO/DF - Especialista em Periodontia & Implantodontia - CADista.</p>
            </div>
        </div>
    </footer>
    `;

    // Injeta o código acima bem no final do <body> de qualquer página
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Executa a função assim que a página carregar
window.addEventListener('DOMContentLoaded', gerarFooter);