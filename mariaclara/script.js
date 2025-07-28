document.addEventListener("DOMContentLoaded", () => {
function animarNumerosSuavemente() {
  // NÚMEROS DO RESUMO ANIMADOS 
  const contadores = document.querySelectorAll('.resumo strong');

  contadores.forEach((contador, i) => {
    setTimeout(() => {
      contador.classList.add('aparecer');
    }, 200 * i); // efeito cascata
  });
}
  // ANIMAÇÃO DE BARRAS
  const progressBars = document.querySelectorAll(".progresso .barra div");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = 0;
    setTimeout(() => {
      bar.style.transition = "width 1.5s ease-in-out";
      bar.style.width = width;
    }, 200);
  });

  // CALENDÁRIO
  const monthElement = document.getElementById("mes-atual");
  const anoElement = document.getElementById("ano");
  const diasContainer = document.querySelector(".dias-calendario");
  const btnAvancar = document.getElementById("btn-avancar");
  const btnVoltar = document.getElementById("btn-voltar");

  let hoje = new Date();
  let mes = hoje.getMonth();
  let ano = hoje.getFullYear();

  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const datasImportantes = {
    "2025-07-09": "pink",
    "2025-07-12": "roxo-escuro",
    "2025-07-18": "lilas",
    "2025-07-23": "pink"
  };

  function renderizaCalendario(mes, ano) {
    diasContainer.innerHTML = "";

    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
    const totalDias = new Date(ano, mes + 1, 0).getDate();

    for (let i = 0; i < primeiroDiaSemana; i++) {
      const vazio = document.createElement("div");
      diasContainer.appendChild(vazio);
    }

    for (let dia = 1; dia <= totalDias; dia++) {
      const divDia = document.createElement("div");
      divDia.classList.add("dia-calendario");

      const dataStr = `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
      const corPino = datasImportantes[dataStr];

      const numeroSpan = document.createElement("span");
      numeroSpan.textContent = dia;
      numeroSpan.classList.add("numero-dia");

      if (corPino) {
        const pino = document.createElement("span");
        pino.classList.add("pino-data", corPino);
        divDia.appendChild(pino);
      }

      divDia.appendChild(numeroSpan);
      diasContainer.appendChild(divDia);
    }

    monthElement.textContent = nomesMeses[mes];
    anoElement.textContent = ano;
  }

  btnAvancar.addEventListener("click", () => {
    mes++;
    if (mes > 11) {
      mes = 0;
      ano++;
    }
    renderizaCalendario(mes, ano);
  });

  btnVoltar.addEventListener("click", () => {
    mes--;
    if (mes < 0) {
      mes = 11;
      ano--;
    }
    renderizaCalendario(mes, ano);
  });

  renderizaCalendario(mes, ano);
  animarNumerosSuavemente();

  // CARROSSEL DE DICAS
  let indiceAtual = 0;
  const dicas = document.querySelectorAll('.carrossel-dicas .dica');
  const bolinhas = document.querySelectorAll('.card.dicas .bolinha');

  function mostrarDica(index) {
    dicas.forEach((dica, i) => {
      dica.classList.toggle('ativa', i === index);
      bolinhas[i].classList.toggle('ativa', i === index);
    });
    indiceAtual = index;
  }

  function proximaDica() {
    indiceAtual = (indiceAtual + 1) % dicas.length;
    mostrarDica(indiceAtual);
  }

  bolinhas.forEach((bolinha, i) => {
    bolinha.addEventListener('click', () => {
      mostrarDica(i);
    });
  });

  mostrarDica(indiceAtual);
  setInterval(proximaDica, 5000);
});

const logo = document.querySelector(".logo");
const menuLateral = document.getElementById("menu-lateral");

logo.addEventListener("click", () => {
  menuLateral.classList.toggle("ativo");
  menuLateral.classList.toggle("oculto");
});
document.addEventListener("click", (e) => {
  const clicouFora = !menuLateral.contains(e.target) && !logo.contains(e.target);

  if (clicouFora && menuLateral.classList.contains("ativo")) {
    menuLateral.classList.remove("ativo");
    menuLateral.classList.add("oculto");
  }
});
