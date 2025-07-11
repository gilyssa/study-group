document.addEventListener("DOMContentLoaded", () => {
    const cardGerenciar = document.querySelector ("#card-gerenciar");
    const containerTrilhas = document.querySelector("#container-trilhas-estudos");

    cardGerenciar.addEventListener("click", () => {
        containerTrilhas.classList.remove("oculto");
        containerTrilhas.classList.add("ativo");
    });
});