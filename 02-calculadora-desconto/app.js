"use strict"

function calcularDesconto(){

    const precoOriginal = document.getElementById(`preco`).value
    const descontinho = document.getElementById(`desconto`).value
    const calculo = (precoOriginal * descontinho) / 100
    const calculoFinal = precoOriginal - calculo
    const resultado = document.getElementById("result")
    //console.log( calculo, precoOriginal, descontinho)
    //console.log(calculoFinal)

    resultado.textContent = `Valor economizado é de ${calculo}, valor final será de ${calculoFinal}`
}