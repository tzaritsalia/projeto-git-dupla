function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");

    if (mensagem) {
        mensagem.textContent =
            "Bem-vindo ao nosso projeto! Conheça as páginas da Lia e do Gustavo.";
    }
}

const temaBtn = document.getElementById("temaBtn");

if (temaBtn) {
    temaBtn.addEventListener("click", function () {
        const escuro = document.body.classList.toggle("escuro");

        temaBtn.textContent = escuro
            ? "☀️ Tema claro"
            : "🌙 Tema escuro";
    });
}