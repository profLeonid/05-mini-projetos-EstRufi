"use strict"

function calcularDesconto(){

    const precoOriginal = document.getElementById(`preco`).value
    const descontinho = document.getElementById(`desconto`).value
    const calculo = (precoOriginal * descontinho) / 100
    const calculoFinal = precoOriginal - calculo
    const resultado = document.getElementById("result")

    resultado.textContent = `Valor economizado é de ${calculo}, valor final será de ${calculoFinal}`

    if(descontinho < 4.99)
        resultado.classList.add("ate5")
    else if(descontinho < 9.99)
        resultado.classList.add("ate10")
    else
        resultado.classList.add("acima10")
    
}