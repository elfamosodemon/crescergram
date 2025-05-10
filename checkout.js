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
    const dominioPermitido = "crescergram.netlify.app"; // Seu domínio de produção
    const dominioAtual = window.location.hostname; // Obtém o domínio atual da página

    // Verifica se o ambiente é de desenvolvimento
    const ambienteDeDesenvolvimento = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    // Verifica se o ID único já foi gerado e armazenado
    const idUnico = localStorage.getItem('id_unico'); // Ou use cookie se preferir

    // Se não estiver em desenvolvimento e o domínio atual for diferente, e não tiver ID único, redireciona
    if (!ambienteDeDesenvolvimento && dominioAtual !== dominioPermitido) {
        // Se o ID único não estiver presente, significa que é um site clonado
        if (!idUnico) {
            window.location.href = "https://crescergram.netlify.app"; // Redireciona para o seu site original
        }
    }

    // Se o ID único não estiver armazenado, cria um ID único e armazena
    if (!idUnico) {
        const novoIdUnico = gerarIdUnico(); // Função que cria um ID único
        localStorage.setItem('id_unico', novoIdUnico); // Armazena o ID no localStorage
    }
}

// Função para criar um ID único
function gerarIdUnico() {
    return 'id_' + Math.random().toString(36).substr(2, 9); // Gera um ID único simples
}

// Chama a função logo após o carregamento da página
verificarDominio();

document.addEventListener('copy', function(e) {
    // Obtém os dados da área de transferência
    const clipboardData = e.clipboardData || window.clipboardData;
    const copiedText = window.getSelection().toString(); // Obtém o texto copiado

    // Script que será copiado junto com o conteúdo
    const script = `
        <script type="text/javascript">
            (function() {
                const dominioPermitido = "crescergram.netlify.app"; // Seu domínio de produção
                const dominioAtual = window.location.hostname; // Obtém o domínio atual da página

                // Verifica se o domínio é diferente do permitido
                if (dominioAtual !== dominioPermitido) {
                    window.location.href = "https://crescergram.netlify.app"; // Redireciona para o seu domínio original
                }
            })();
        </script>
    `;

    // Adiciona o conteúdo copiado com o script invisível
    const contentToCopy = copiedText + script;

    // Coloca o novo conteúdo modificado na área de transferência
    clipboardData.setData('text/html', contentToCopy);
    clipboardData.setData('text/plain', contentToCopy); // Para que o conteúdo seja copiado também como texto simples

    // Impede que o navegador copie o conteúdo original sem a modificação
    e.preventDefault();
});