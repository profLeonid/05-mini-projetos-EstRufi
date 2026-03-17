"use strict"

const calcularMedia = (valor1,valor2,valor3) => (valor1 + valor2 + valor3) / 3

function situacaoAluno (media){
    if ( media >= 7)
        return "aprovado"
    else if (media < 5)
        return "reprovado"
    else
        return "recuperacao"
}

function texto (media){
    if ( media >= 7)
        return "foi Aprovado IUPIIII"
    else if (media < 5)
        return "está reprovado, se lascouuu"
    else
        return "está de recuperação, vamos tentar novamente"
}

function handleClick(){
    const valor1 = Number(document.getElementById("valor1").value)
    const valor2 = Number(document.getElementById("valor2").value)
    const valor3 = Number(document.getElementById("valor3").value)
    const resultado = document.getElementById("result")

    const media = calcularMedia(valor1,valor2,valor3).toFixed(2)
    const palavra = texto(media)
    const cor = situacaoAluno(media)

    resultado.textContent = `A sua média foi de ${media},\n meus parabéns você ${palavra}.`
    resultado.classList.add(cor)
}
