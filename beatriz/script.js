/**
 * Aplicação de Agenda
 * Gerencia funcionalidades do calendário e exibição de eventos
 */

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // CONSTANTES E CONFIGURAÇÃO
  // ========================================

  const NOMES_MESES = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const EVENTOS_CALENDARIO = {
    // Eventos de Agosto 2025
    "2025-08-01": [{ tipo: "aula", nome: "Aula" }],
    "2025-08-02": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-08-07": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-08-09": [{ tipo: "aula", nome: "Aula" }],
    "2025-08-14": [{ tipo: "evento", nome: "Evento" }],
    "2025-08-16": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-08-21": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-08-23": [{ tipo: "aula", nome: "Aula" }],
    "2025-08-27": [{ tipo: "aula", nome: "Aula" }],
    "2025-08-28": [
      { tipo: "aula", nome: "Aula" },
      { tipo: "plantao", nome: "Plantão" },
    ],
    "2025-08-30": [{ tipo: "aula", nome: "Aula" }],

    // Eventos de Maio 2025
    "2025-05-01": [{ tipo: "aula", nome: "Aula" }],
    "2025-05-02": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-05-07": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-05-09": [{ tipo: "aula", nome: "Aula" }],
    "2025-05-14": [{ tipo: "evento", nome: "Evento" }],
    "2025-05-16": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-05-21": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-05-23": [{ tipo: "aula", nome: "Aula" }],
    "2025-05-28": [
      { tipo: "aula", nome: "Aula" },
      { tipo: "plantao", nome: "Plantão" },
    ],
    "2025-05-30": [{ tipo: "aula", nome: "Aula" }],

    // Eventos de Junho 2025
    "2025-06-04": [{ tipo: "aula", nome: "Aula" }],
    "2025-06-06": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-06-11": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-06-13": [{ tipo: "evento", nome: "Evento" }],
    "2025-06-18": [{ tipo: "aula", nome: "Aula" }],
    "2025-06-20": [{ tipo: "plantao", nome: "Plantão" }],
    "2025-06-25": [{ tipo: "desafio", nome: "Desafio" }],
    "2025-06-27": [{ tipo: "evento", nome: "Evento" }],
  };

  // ========================================
  // ELEMENTOS DO DOM
  // ========================================

  const elementoMes = document.getElementById("mes-atual");
  const containerDias = document.getElementById("dias-mes");
  const btnMesAnterior = document.getElementById("btn-voltar-mes");
  const btnProximoMes = document.getElementById("btn-avancar-mes");

  // ========================================
  // GERENCIAMENTO DE ESTADO
  // ========================================

  const hoje = new Date();
  let mesAtual = 7; // Agosto (0-indexed)
  let anoAtual = 2025;
  let diaSelecionado = null;

  // ========================================
  // FUNÇÕES UTILITÁRIAS
  // ========================================

  // Formata data para string YYYY-MM-DD
  function formatarData(ano, mes, dia) {
    return `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(
      2,
      "0"
    )}`;
  }

  // Verifica se uma data é hoje
  function ehHoje(dia, mes, ano) {
    return (
      dia === hoje.getDate() &&
      mes === hoje.getMonth() &&
      ano === hoje.getFullYear()
    );
  }

  // ========================================
  // RENDERIZAÇÃO DO CALENDÁRIO
  // ========================================

  // Renderiza o calendário para um mês e ano específicos
  function renderizarCalendario(mes, ano) {
    containerDias.innerHTML = "";

    // Obtém primeiro dia da semana e total de dias
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
    const totalDias = new Date(ano, mes + 1, 0).getDate();
    const diasMesAnterior = new Date(ano, mes, 0).getDate();

    // Adiciona dias do mês anterior
    for (let i = primeiroDiaSemana - 1; i >= 0; i--) {
      const diaAnterior = diasMesAnterior - i;
      const mesAnterior = mes === 0 ? 11 : mes - 1;
      const anoAnterior = mes === 0 ? ano - 1 : ano;

      const elementoDia = criarElementoDia(
        diaAnterior,
        true,
        anoAnterior,
        mesAnterior
      );
      containerDias.appendChild(elementoDia);
    }

    // Adiciona dias do mês atual
    for (let dia = 1; dia <= totalDias; dia++) {
      const elementoDia = criarElementoDia(dia, false, ano, mes);
      containerDias.appendChild(elementoDia);
    }

    // Preenche células restantes com dias do próximo mês
    const totalCelulas = containerDias.children.length;
    const celulasRestantes = 42 - totalCelulas; // 6 semanas x 7 dias

    for (let dia = 1; dia <= celulasRestantes && dia <= 14; dia++) {
      const proximoMes = mes === 11 ? 0 : mes + 1;
      const proximoAno = mes === 11 ? ano + 1 : ano;

      const elementoDia = criarElementoDia(dia, true, proximoAno, proximoMes);
      containerDias.appendChild(elementoDia);
    }

    // Atualiza exibição do mês/ano
    elementoMes.textContent = `${NOMES_MESES[mes]} de ${ano}`;
  }

  // Cria um elemento de dia do calendário
  function criarElementoDia(dia, outroMes, ano, mes) {
    const elementoDia = document.createElement("div");
    elementoDia.classList.add("dia-calendario");

    // Cria elemento do número do dia
    const numeroDia = document.createElement("span");
    numeroDia.classList.add("numero-dia");
    numeroDia.textContent = dia;
    elementoDia.appendChild(numeroDia);

    // Adiciona estilo de outro mês
    if (outroMes) {
      elementoDia.classList.add("outro-mes");
    }

    // Verifica se é hoje
    if (!outroMes && ehHoje(dia, mes, ano)) {
      elementoDia.classList.add("hoje");
    }

    // Adiciona eventos se houver
    const stringData = formatarData(ano, mes, dia);
    const eventos = EVENTOS_CALENDARIO[stringData];

    if (eventos && eventos.length > 0) {
      elementoDia.classList.add("tem-evento");
      adicionarChipsEventos(elementoDia, eventos);
    }

    // Adiciona evento de clique
    elementoDia.addEventListener("click", () => {
      if (!outroMes) {
        lidarComCliqueDia(elementoDia, dia, stringData);
      }
    });

    return elementoDia;
  }

  // Adiciona chips de eventos a um elemento de dia
  function adicionarChipsEventos(elementoDia, eventos) {
    const containerEventos = document.createElement("div");
    containerEventos.classList.add("eventos-container");

    // Adiciona chips para cada evento (máximo 2)
    eventos.slice(0, 2).forEach((evento) => {
      const chip = document.createElement("span");
      chip.classList.add("evento-chip", evento.tipo);
      chip.textContent = evento.nome;
      containerEventos.appendChild(chip);
    });

    elementoDia.appendChild(containerEventos);
  }

  // Lida com cliques nos dias
  function lidarComCliqueDia(elementoDia, dia, stringData) {
    // Remove seleção anterior
    document.querySelectorAll(".dia-calendario.selecionado").forEach((el) => {
      el.classList.remove("selecionado");
    });

    // Adiciona nova seleção
    elementoDia.classList.add("selecionado");
    diaSelecionado = dia;

    // Mostra eventos do dia
    mostrarEventosDia(stringData);
  }

  // Mostra eventos para um dia específico
  function mostrarEventosDia(stringData) {
    const eventos = EVENTOS_CALENDARIO[stringData];
    if (eventos && eventos.length > 0) {
      console.log(`Eventos para ${stringData}:`, eventos);
      // TODO: Implementar modal de detalhes ou atualização da sidebar
    }
  }

  // ========================================
  // MANIPULADORES DE NAVEGAÇÃO
  // ========================================

  // Navega para o próximo mês
  function irParaProximoMes() {
    mesAtual++;
    if (mesAtual > 11) {
      mesAtual = 0;
      anoAtual++;
    }
    renderizarCalendario(mesAtual, anoAtual);
  }

  // Navega para o mês anterior
  function irParaMesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
      mesAtual = 11;
      anoAtual--;
    }
    renderizarCalendario(mesAtual, anoAtual);
  }

  // Navega para um mês e ano específicos
  function irParaMes(mes, ano) {
    mesAtual = mes;
    anoAtual = ano;
    renderizarCalendario(mesAtual, anoAtual);
  }

  // ========================================
  // NAVEGAÇÃO POR TECLADO
  // ========================================

  // Adiciona suporte à navegação por teclado
  function adicionarNavegacaoTeclado() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          btnMesAnterior.click();
          break;
        case "ArrowRight":
          btnProximoMes.click();
          break;
        case "Home":
          // Volta para o mês atual
          mesAtual = hoje.getMonth();
          anoAtual = hoje.getFullYear();
          renderizarCalendario(mesAtual, anoAtual);
          break;
      }
    });
  }

  // ========================================
  // EFEITOS DE HOVER
  // ========================================

  // Adiciona efeitos de hover aos dias do calendário
  function adicionarEfeitosHover() {
    document.addEventListener("mouseover", (e) => {
      if (
        e.target.classList.contains("dia-calendario") &&
        !e.target.classList.contains("outro-mes")
      ) {
        e.target.style.transform = "scale(1.05)";
        e.target.style.transition = "transform 0.2s ease";
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.classList.contains("dia-calendario")) {
        e.target.style.transform = "scale(1)";
      }
    });
  }

  // ========================================
  // FUNCIONALIDADE DE ATUALIZAÇÃO AUTOMÁTICA
  // ========================================

  // Atualiza o calendário se a data mudar
  function configurarAtualizacaoAutomatica() {
    setInterval(() => {
      const novaData = new Date();
      if (novaData.getDate() !== hoje.getDate()) {
        hoje.setTime(novaData.getTime());
        renderizarCalendario(mesAtual, anoAtual);
      }
    }, 60000); // Verifica a cada minuto
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================

  btnMesAnterior.addEventListener("click", irParaMesAnterior);
  btnProximoMes.addEventListener("click", irParaProximoMes);

  // ========================================
  // INICIALIZAÇÃO
  // ========================================

  // Inicializa a aplicação do calendário
  function inicializar() {
    renderizarCalendario(mesAtual, anoAtual);
    adicionarNavegacaoTeclado();
    adicionarEfeitosHover();
    configurarAtualizacaoAutomatica();
  }

  // Inicia a aplicação
  inicializar();

  // ========================================
  // API PÚBLICA (para uso externo)
  // ========================================

  window.calendarioApp = {
    irParaMes,
    mostrarEventosDia,
  };
});
