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

    //Mostra o conteúdo do container clicado e esconde todos os outros
    function mostrarContainer(container) {
      // Remove a classe "ativo" (que mostra) e adiciona "oculto" (que esconde) em todos os containers
      todosContainers.forEach(c => {
        c.classList.remove("ativo");
        c.classList.add("oculto");
      });

      container.classList.remove("oculto");
      container.classList.add("ativo");
    }
    //Destaca visualmente o card clicado com uma classe CSS
    function ativarCard(cardClicado) {
    // Remove a classe de destaque (.card-ativo) de todos os cards
    todosCards.forEach(card => {
    const interno = card.querySelector('.card-padrao');
    if (interno) interno.classList.remove("card-ativo");
  });
  // Adiciona a classe de destaque apenas ao card clicado
  const clicadoInterno = cardClicado.querySelector('.card-padrao');
  if (clicadoInterno) clicadoInterno.classList.add("card-ativo");
}

  // Mapeia cada card com seu respectivo container
  const mapaCards = [
    { card: cardGerenciar, container: containerTrilhas },
    { card: cardEntregas, container: containerEntregas },
    { card: cardFeedback, container: containerFeedback },
    { card: cardRelatorios, container: containerRelatorios }
  ];

  // Adiciona eventos de clique dinamicamente
  mapaCards.forEach(({ card, container }) => {
    if (card && container) {
      card.addEventListener("click", () => {
        mostrarContainer(container);
        ativarCard(card);
      });
    }
  });
});