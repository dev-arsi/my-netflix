
let botao = document.getElementById("botao-pergunta")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("imagem-pergunta")

function blz() {
    if (menu.style.display == "block") {
        menu.style.display = "none"
        imagem.id = "imagem-pergunta"
    } else {
        menu.style.display = "block"
        imagem.id = "imagem-pergunta-girar"
    }

}

botao.addEventListener("click", blz)


