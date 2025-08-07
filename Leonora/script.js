const trilhas = {
  frontend: {
    html: `
	  <div class="titulos-bloco-principal">
		<h2 class="titulo-trilha">Frontend</h2>
		<p class="descricao-trilha">Desenvolvimento de interfaces web e aplicações frontend.</p>
	  </div>

	  <section class="area-modulo-ativo">
		<h3 class="titulo-modulo">Módulo 1: HTML e CSS</h3>

		<section class="informacoes-aula">
		  <p class="titulo-aula">Aula 01: Introdução ao HTML</p>
		  <p class="descricao-aula">Fundamentos do HTML e estrutura básica de documentos web</p>
		  <a href="assets/imagens/arquivo.gif" download class="botao-download-material">
			<svg class="icone-botao-download" aria-hidden="true">
			  <use href="assets/sprite.svg#icone-botao-download"></use>
			</svg>
			<span class="descricao-botao-download">baixar material</span>
		  </a>
		</section>

		<section class="informacoes-aula">
		  <p class="titulo-aula">Aula 02: Estrutura básica de um projeto</p>
		  <p class="descricao-aula">Como organizar arquivos e pastas em um projeto frontend</p>
		  <a href="assets/imagens/arquivo.gif" download class="botao-download-material">
			<svg class="icone-botao-download" aria-hidden="true">
			  <use href="assets/sprite.svg#icone-botao-download"></use>
			</svg>
			<span class="descricao-botao-download">baixar material</span>
		  </a>
		</section>

		<section class="informacoes-aula">
		  <p class="titulo-aula">Aula 03: Semântica HTML</p>
		  <p class="descricao-aula">Tags semânticas e boas práticas para acessibilidade</p>
		  <a href="assets/imagens/arquivo.gif" download class="botao-download-material">
			<svg class="icone-botao-download" aria-hidden="true">
			  <use href="assets/sprite.svg#icone-botao-download"></use>
			</svg>
			<span class="descricao-botao-download">baixar material</span>
		  </a>
		</section>

		<hr class="divisor-modulos">
	  </section>

	  <section class="area-modulo">
		<div class="barra-acesso-modulo">
		  <h3 class="titulo-modulo">Módulo 2: CSS Avançado</h3>
		  <svg class="icone-abrir-modulo" aria-hidden="true">
			<use href="assets/sprite.svg#icone-abrir-modulo"></use>
		  </svg>
		</div>
		<div class="informacoes-modulo">
		  <p class="descricao-trilha">Em breve...</p>
		</div>
		<hr class="divisor-modulos">
	  </section>
	`,
  },

  backend: {
    html: `
	  <div class="titulos-bloco-principal">
		<h2 class="titulo-trilha">Backend</h2>
		<p class="descricao-trilha">Em breve...</p>
	  </div>
	`,
  },

  dados: {
    html: `
	  <div class="titulos-bloco-principal">
		<h2 class="titulo-trilha">Dados</h2>
		<p class="descricao-trilha">Em breve...</p>
	  </div>
	`,
  },

  "ui/ux": {
    html: `
	  <div class="titulos-bloco-principal">
		<h2 class="titulo-trilha">UI/UX</h2>
		<p class="descricao-trilha">Em breve...</p>
	  </div>
	`,
  },
};

const botoesTrilha = document.querySelectorAll(".botao-trilha");
const blocoPrincipal = document.querySelector(".bloco-principal");

function carregarConteudoTrilha(nomeTrilha) {
  const trilha = trilhas[nomeTrilha];
  if (!trilha) return;

  blocoPrincipal.innerHTML = trilha.html;

  blocoPrincipal.onclick = (event) => {
    const barraModulo = event.target.closest(".barra-acesso-modulo");
    if (barraModulo) {
      const moduloSection = barraModulo.parentElement;
      moduloSection.classList.toggle("modulo-ativo");
    }
  };
}

botoesTrilha.forEach((botao) => {
  botao.addEventListener("click", () => {
    // Resetar todos os botões
    botoesTrilha.forEach((b) => b.setAttribute("aria-pressed", "false"));

    // Marcar o botão clicado como ativo
    botao.setAttribute("aria-pressed", "true");

    // Obter nome da trilha e carregar conteúdo
    const nomeTrilha = botao.textContent.toLowerCase().trim();
    carregarConteudoTrilha(nomeTrilha);
  });
});
