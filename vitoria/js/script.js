document.addEventListener("DOMContentLoaded", () => {
    const cardGerenciar = document.querySelector ("#card-gerenciar");
    const containerTrilhas = document.querySelector("#container-trilhas-estudos");
    const cardEntregas = document.querySelector ("#card-entregas");
    const cardFeedback = document.querySelector("#card-feedback");
    const cardRelatorios = document.querySelector("#card-relatorios");

    const containerEntregas = document.querySelector("#container-entregas");
    const containerFeedback = document.querySelector("#container-feedback");
    const containerRelatorios = document.querySelector("#container-relatorios");

    const todosContainers = document.querySelectorAll(".container-conteudo");

    function mostrarContainer(container) {
      todosContainers.forEach(c => {
        c.classList.remove("ativo");
        c.classList.add("oculto");
      });

      container.classList.remove("oculto");
      container.classList.add("ativo");
    }

    cardGerenciar.addEventListener("click",() => {
        mostrarContainer(containerTrilhas);
    });
    
    cardEntregas.addEventListener("click", () => {
        mostrarContainer(containerEntregas);
    });

    cardFeedback.addEventListener("click",() => {
        mostrarContainer(containerFeedback);
    });

    cardRelatorios.addEventListener("click", () =>{
        mostrarContainer(containerRelatorios);
    });
});