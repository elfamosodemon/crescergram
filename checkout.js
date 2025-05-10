// checkout.js
window.onload = function() {
    // Defina o seu link de checkout original
    const checkoutOriginal = "https://pay.pixpagamentoseguro.store/RmA83EajyAw3PVp";
    
    // Seleciona o botão
    const buyNowButton = document.getElementById("buy-now-btn1");

    // Adiciona o evento de clique ao botão
    buyNowButton.addEventListener("click", function(event) {
        // Verifica o link atual de checkout
        const checkoutAtual = window.location.href;

        // Se o link de checkout for o correto, redireciona para o link de checkout original
        if (!checkoutAtual.includes(checkoutOriginal)) {
            // Redireciona para o checkout correto
            window.location.href = checkoutOriginal;
        } else {
            // Se o link já for o correto, faz o redirecionamento normalmente
            window.location.href = buyNowButton.onclick.href;
        }
    });
};

function verificarDominio() {
    // Defina seu domínio de produção
    const dominioPermitido = "crescergram.netlify.app.com"; // Seu domínio de produção
    const dominioAtual = window.location.hostname; // Obtém o domínio atual da página

    // Verifica se o ambiente é de desenvolvimento
    const ambienteDeDesenvolvimento = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    // Se não estiver em desenvolvimento e o domínio atual for diferente, redireciona
    if (!ambienteDeDesenvolvimento && dominioAtual !== dominioPermitido) {
        window.location.href = "https://crescergram.netlify.app.com"; // Redireciona para o seu site original
    }
}

verificarDominio()