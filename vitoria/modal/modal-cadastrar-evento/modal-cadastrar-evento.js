document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cadastrarNovoEvento');
  const abrirBtn = document.getElementById('botao-cadastrar-evento');
  const form = document.getElementById('formCadastrarEvento');
  const dataInput = document.getElementById('data');
  const horaInput = document.getElementById('hora');
  const mensagem = document.getElementById('mensagem-sucesso');

  if (!modal || !abrirBtn || !form || !dataInput || !horaInput || !mensagem) {
    console.error('Elementos do modal não encontrados.');
    return;
  }

  // Abre modal
  abrirBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Fecha clicando fora do conteúdo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
  });

  // Fecha com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
  });

  function fecharModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    form.reset(); // Adicionado para resetar o formulário ao fechar o modal
    mensagem.classList.remove('ativo'); // Garante que a mensagem de sucesso está escondida
  }

  // Configura mínimo no input date
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd = String(hoje.getDate()).padStart(2, '0');
  dataInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // campos obrigatórios
    if (!dataInput.value) { alert('Selecione uma data.'); return; }
    if (!horaInput.value) { alert('Selecione um horário.'); return; }

    // valida ano
    const anoDigitado = parseInt(dataInput.value.split('-')[0], 10);
    const anoAtual = new Date().getFullYear();
    if (anoDigitado < anoAtual) { alert(`Ano inválido. Só é permitido a partir de ${anoAtual}.`); return; }

    // data + hora
    const dataHora = new Date(`${dataInput.value}T${horaInput.value}`);
    if (isNaN(dataHora.getTime())) { alert('Data ou horário inválido.'); return; }
    if (dataHora < new Date()) { alert('A data e o horário do evento não podem ser anteriores ao momento atual.'); return; }

    // passou validações
    form.reset();

    // Mostra mensagem de sucesso usando a classe
    mensagem.classList.add('ativo');

    // Fecha modal depois de 2s
    setTimeout(() => {
      // Remove a classe para iniciar a animação de saída
      mensagem.classList.remove('ativo');

      setTimeout(() => {
        fecharModal();
      }, 300); // espera terminar a animação antes de esconder
    }, 2000);
  });
});