document.addEventListener("DomContentLoaded", () => {
    const cardGerenciar = document.querySelector ("#card-gerenciar");
    const containerTrilhas = document.querySelector("#container-trilhas-estudos");

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
});