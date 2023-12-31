// Seção Slider
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

// Seção FAQ
document.addEventListener('DOMContentLoaded', function(){
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item){

        const question = item.querySelector(".question");
        const icone = item.querySelector(".icone");

        question.addEventListener("click", function(){

            item.classList.toggle("mostrar")

            icone.classList.toggle("rotate")
        })

    })
})

// Seção Formulario

const campos = document.querySelectorAll(".input-text");
const botao = document.querySelector(".botao-enviar")

botao.addEventListener("click", function(e){
    e.preventDefault();

    campos.forEach((input)=>{

        if(input.value === ""){
            input.nextElementSibling.classList.add("required");
            input.classList.add("campo-vazio")
        } else {
            input.nextElementSibling.classList.remove("required")
            input.classList.remove("campo-vazio")
        }
    })
})


