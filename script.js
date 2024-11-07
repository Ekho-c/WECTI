// Função para inicializar a validação dos formulários
document.addEventListener("DOMContentLoaded", function() {
    // Verifica o formulário de denúncias
    const denunciaForm = document.querySelector(".denuncia-form");
    if (denunciaForm) {
        denunciaForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio até a verificação ser concluída

            // Campos obrigatórios
            const descricao = document.getElementById("descricao").value.trim();
            const local = document.getElementById("local").value.trim();
            const envolvidos = document.getElementById("envolvidos").value.trim();
            const documentos = document.getElementById("documentos");

            // Verifica se todos os campos obrigatórios estão preenchidos
            if (!descricao || !local || !envolvidos) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Verifica se pelo menos um documento foi anexado
            if (documentos.files.length === 0) {
                alert("É necessário anexar pelo menos um documento como prova.");
                return;
            }

            // Se todas as verificações forem aprovadas, envia o formulário
            alert("Denúncia enviada com sucesso!");
            
        });
    }

    // Adiciona interação à página "Como Denunciar"
    const denunciaButton = document.querySelector(".denuncia-button");
    if (denunciaButton) {
        denunciaButton.addEventListener("click", function(event) {
            const confirmRedirect = confirm("Você será direcionado para a página de Denúncias. Deseja continuar?");
            if (!confirmRedirect) {
                event.preventDefault(); // Impede o redirecionamento se o usuário não confirmar
            }
        });
    }

    // Feedback de interação na página "Sobre a Corrupção"
    const infoBlocks = document.querySelectorAll(".info-block");
    infoBlocks.forEach(block => {
        block.addEventListener("mouseover", function() {
            block.style.backgroundColor = "#e0f7ff"; // Altera a cor ao passar o mouse
        });
        block.addEventListener("mouseout", function() {
            block.style.backgroundColor = "#fff"; // Restaura a cor original
        });
    });
});
