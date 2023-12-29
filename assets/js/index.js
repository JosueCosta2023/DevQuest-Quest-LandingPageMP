//Logica de programação:

/*
    - Quando o usuario clicar na setas avançar e voltar, a imagem deve ser alterada.

    - Para alterar a imagem:
        -- Primeiro esconda a imagem atual, removendo a classe MOSTRAR.
        -- Segundo, exiba a proxima imagem, inserindo a classe MOSTRAR.

    - Com todas as imagens selecionadas em um array, utilize a chave do array para navegar entre as imagens.

    - Para ser possivel a navegação, vamos utilizar um contador e incrementa-lo sempre que o usuario clicar na seta avançar e iremos decrementar-lo se o usuario clicar na seta voltar.

    - Este valor do CONTADOR sera usado como variavel para navegar pelas imagens através do atributo KEY do array de imagens.
*/

const imagensPainel     = document.querySelectorAll('.imagem-painel');
const setaAvancar       = document.getElementById('btn-avancar');
const setaVoltar        = document.getElementById('btn-voltar');
let imagemAtual         = 0;
const totalDeImagens    = imagensPainel.length - 1;

setaAvancar.addEventListener('click', function(){
    //Validando se a imagem atual esta na ultima posição do slide,
    //Se sim então a tecla avançar sera desabilitada.
    if(imagemAtual === totalDeImagens) {
        return
    }    
    //Incremento ao clicar na seta avançar.
    imagemAtual++;
    
    //Removendo exibição da imagem selecionada
    OcultarImagem();
    
    //Exibindo a proxima imagem da lista
    exibirImagem();

    ocultarOuExibirSetas();

})

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--;

    OcultarImagem();

    exibirImagem();

    ocultarOuExibirSetas();

})


function exibirImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}
function OcultarImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}
function ocultarOuExibirSetas() {

    const ehUltima = imagensPainel[imagemAtual] !== 0 && 
                        imagemAtual === imagensPainel.length -1;
    const ehPrimeira = imagemAtual === 0;

    if(ehUltima){

        setaAvancar.classList.add('desabilitar')

    } else {

        setaAvancar.classList.remove('desabilitar')
    }

    if(ehPrimeira) {

        setaVoltar.classList.add('desabilitar')

    } else {

        setaVoltar.classList.remove('desabilitar')
    }
}

