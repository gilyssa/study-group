document.addEventListener("DOMContentLoaded", () => {
    const cardGerenciar = document.querySelector ("#card-gerenciar");
    const containerTrilhas = document.querySelector("#container-trilhas-estudos");
    const cardEntregas = document.querySelector ("#card-entregas");
    const cardFeedback = document.querySelector("#card-feedback");
    const cardRelatorios = document.querySelector("#card-relatorios");
    const todosCards = document.querySelectorAll("#container-cards section");


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

    function ativarCard(cardClicado) {
    todosCards.forEach(card => {
    const interno = card.querySelector('.card-padrao');
    if (interno) interno.classList.remove("card-ativo");
  });

  const clicadoInterno = cardClicado.querySelector('.card-padrao');
  if (clicadoInterno) clicadoInterno.classList.add("card-ativo");
}


    cardGerenciar.addEventListener("click",() => {
        mostrarContainer(containerTrilhas);
        ativarCard(cardGerenciar);
    });
    
    cardEntregas.addEventListener("click", () => {
        mostrarContainer(containerEntregas);
        ativarCard(cardEntregas);
    });

    cardFeedback.addEventListener("click",() => {
        mostrarContainer(containerFeedback);
         ativarCard(cardFeedback);
    });

    cardRelatorios.addEventListener("click", () =>{
        mostrarContainer(containerRelatorios);
        ativarCard(cardRelatorios);
    });
});