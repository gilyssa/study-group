


document.addEventListener('DOMContentLoaded', function () {



    const selecaoButtons = document.querySelectorAll('.front , .back , .dados , .ui-ux')

    
        selecaoButtons.forEach(function (botao) {

           botao.addEventListener('click', function () {

                selecaoButtons.forEach(function(btn){
                    btn.classList.remove('ativo')
                })
                this.classList.add('ativo')
                    
            })          
        })
    




    const buttonEnviar = document.querySelector('.button-enviar')
    const status = document.querySelector('.pendente')

    if (buttonEnviar) {
        buttonEnviar.addEventListener('click', function () {

            
            const inputFile = document.createElement('input')
            inputFile.type = 'file'
            inputFile.accept = '.zip,.rar,.pdf,.html,.css,.js' 

            inputFile.addEventListener('change', function () {
                if (inputFile.files.length > 0) {
                    const nomeArquivo = inputFile.files[0].name

                  
                    alert(`Arquivo "${nomeArquivo}" enviado com sucesso!`)

                    status.innerHTML = '<img class="vector3" src="src/Vector3.png" alt="ícone entregue">Entregue'
                    status.classList.remove('pendente')
                    status.classList.add('entregue')

                    buttonEnviar.innerHTML = '<img class="vector4" src="src/Vector4.png" alt="ícone entregue">Enviar atividade'
                   
                    buttonEnviar.classList.remove('button-enviar')
                    buttonEnviar.classList.add('button-reenviar')
                }

            })
            inputFile.click() 
        })
    }

})





