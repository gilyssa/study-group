

// Aguardar o DOM carregar
document.addEventListener('DOMContentLoaded', function () {


    //Selecionar os buttons 
    const selecaoButtons = document.querySelectorAll('.front , .back , .dados , .ui-ux')

    
        selecaoButtons.forEach(function (botao) {

           botao.addEventListener('click', function () {

                selecaoButtons.forEach(function(btn){
                    btn.classList.remove('ativo')
                })
                this.classList.add('ativo')
                    
            })          
        })
    




    // Botão enviar 
    const buttonEnviar = document.querySelector('.button-enviar')
    const status = document.querySelector('.pendente')

    if (buttonEnviar) {
        buttonEnviar.addEventListener('click', function () {

            // Criar input file dinamicamente
            const inputFile = document.createElement('input')
            inputFile.type = 'file'
            inputFile.accept = '.zip,.rar,.pdf,.html,.css,.js' // tipos aceitos para projetos

            inputFile.addEventListener('change', function () {
                if (inputFile.files.length > 0) {
                    const nomeArquivo = inputFile.files[0].name

                    // Simular envio com feedback
                    alert(`Arquivo "${nomeArquivo}" enviado com sucesso!`)

                    status.innerHTML = '<img class="vector3" src="src/Vector3.png" alt="ícone entregue">Entregue'
                    status.classList.remove('pendente')
                    status.classList.add('entregue')

                    // Mudar o botão para "reenviar atividade"
                    buttonEnviar.innerHTML = '<img class="vector4" src="src/Vector4.png" alt="ícone entregue">Enviar atividade'
                    // buttonEnviar.textContent = 'reenviar atividade'
                    buttonEnviar.classList.remove('button-enviar')
                    buttonEnviar.classList.add('button-reenviar')
                }

            })
            inputFile.click() // Abrir janela de seleção do Windows
        })
    }

})





