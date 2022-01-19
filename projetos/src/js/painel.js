const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')

let imagemAtual = 0

function EsconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}
function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function(){

    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens){
        return
    }

    imagemAtual++
    EsconderImagens()
    mostrarImagens()
})

setaVoltar.addEventListener('click', function(){
    
    if(imagemAtual === 0){
        return
    }

    imagemAtual--
    EsconderImagens()
    mostrarImagens()
})

